import path from 'node:path'
import { existsSync, readFileSync } from 'node:fs'
import { Buffer } from 'node:buffer'
import type { HeadConfig, SiteConfig } from 'vitepress'
import { RssPlugin } from 'vitepress-plugin-rss'
import type { PluginOption } from 'vite'
import { joinPath } from '../../shared/index'
import type { Theme } from '../../composables/config/index'
import { _require } from './mdPlugins'
import { themeReloadPlugin } from './hot-reload-plugin'
import { getArticles } from './theme'

export function getVitePlugins(cfg: Partial<Theme.BlogConfig> = {}) {
  const plugins: any[] = []

  // 处理cover image的路径（暂只支持自动识别的文章首图）
  plugins.push(coverImgTransform())

  // 处理自定义主题色
  if (cfg.themeColor) {
    plugins.push(setThemeScript(cfg.themeColor))
  }
  // 自动重载首页
  plugins.push(themeReloadPlugin())

  // 主题pageData生成
  plugins.push(providePageData(cfg))

  // 内置支持RSS
  if (cfg?.RSS) {
    ;[cfg?.RSS].flat().forEach(rssConfig => plugins.push(RssPlugin(rssConfig)))
  }
  return plugins
}

export function registerVitePlugins(vpCfg: any, plugins: any[]) {
  vpCfg.vite = {
    plugins
  }
}


// TODO: 支持frontmatter中的相对路径图片自动处理
export function coverImgTransform() {
  let blogConfig: Theme.BlogConfig
  let vitepressConfig: SiteConfig
  let assetsDir: string
  return {
    name: '@sugarat/theme-plugin-cover-transform',
    apply: 'build',
    enforce: 'pre',
    configResolved(config: any) {
      vitepressConfig = config.vitepress
      assetsDir = vitepressConfig.assetsDir
      blogConfig = config.vitepress.site.themeConfig.blog
    },
    async generateBundle(_: any, bundle: Record<string, any>) {
      const assetsMap = Object.entries(bundle).filter(([key]) => {
        return key.startsWith(assetsDir)
      }).map(([_, value]) => {
        return value
      })
      for (const page of blogConfig.pagesData) {
        const { cover } = page.meta
        // 是否相对路径引用
        if (!cover?.startsWith?.('/')) {
          continue
        }
        try {
          // 寻找构建后的
          const realPath = path.join(vitepressConfig.root, cover)
          if (!existsSync(realPath)) {
            continue
          }
          const fileBuffer = readFileSync(realPath)
          const matchAsset = assetsMap.find(v => Buffer.compare(fileBuffer, v.source) === 0)
          if (matchAsset) {
            page.meta.cover = joinPath('/', matchAsset.fileName)
          }
        }
        catch (e: any) {
          vitepressConfig.logger.warn(e?.message)
        }
      }
    }
  }
}

export function providePageData(cfg: Partial<Theme.BlogConfig>) {
  return {
    name: '@sugarat/theme-plugin-provide-page-data',
    async config(config: any) {
      const pagesData = await getArticles(cfg, config.vitepress)
      config.vitepress.site.themeConfig.blog.pagesData = pagesData
    },
  } as PluginOption
}

export function setThemeScript(
  themeColor: Theme.ThemeColor
) {
  let resolveConfig: any
  const pluginOps: PluginOption = {
    name: '@sugarat/theme-plugin-theme-color-script',
    enforce: 'pre',
    configResolved(config: any) {
      if (resolveConfig) {
        return
      }
      resolveConfig = config

      const vitepressConfig: SiteConfig = config.vitepress
      if (!vitepressConfig) {
        return
      }
      // 通过 head 添加额外的脚本注入
      const selfTransformHead = vitepressConfig.transformHead
      vitepressConfig.transformHead = async (ctx) => {
        const selfHead = (await Promise.resolve(selfTransformHead?.(ctx))) || []
        return selfHead.concat([
          ['script', { type: 'text/javascript' }, `;(function() {
            document.documentElement.setAttribute("theme", "${themeColor}");
          })()`]
        ] as HeadConfig[])
      }
    }
  }
  return pluginOps
}
