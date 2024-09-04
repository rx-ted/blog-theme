import path from 'node:path';
import { existsSync, readFileSync } from 'node:fs';
import { Buffer } from 'node:buffer';
import { pagefindPlugin } from 'vitepress-plugin-pagefind';
import { RssPlugin } from 'vitepress-plugin-rss';
import { joinPath } from '../../shared/index';
import { themeReloadPlugin } from './hot-reload-plugin';
import { getArticles } from './theme';
export function getVitePlugins(cfg = {}) {
    const plugins = [];
    // 处理cover image的路径（暂只支持自动识别的文章首图）
    plugins.push(coverImgTransform());
    // 处理自定义主题色
    if (cfg.themeColor) {
        plugins.push(setThemeScript(cfg.themeColor));
    }
    // 自动重载首页
    plugins.push(themeReloadPlugin());
    // 主题pageData生成
    plugins.push(providePageData(cfg));
    // 内置简化版的pagefind
    if (cfg && cfg.search !== false) {
        const ops = cfg.search instanceof Object ? cfg.search : {};
        plugins.push(pagefindPlugin({
            ...ops,
        }));
    }
    // 内置支持RSS
    if (cfg?.RSS) {
        ;
        [cfg?.RSS].flat().forEach(rssConfig => plugins.push(RssPlugin(rssConfig)));
    }
    return plugins;
}
export function registerVitePlugins(vpCfg, plugins) {
    vpCfg.vite = {
        plugins
    };
}
// TODO: 支持frontmatter中的相对路径图片自动处理
export function coverImgTransform() {
    let blogConfig;
    let vitepressConfig;
    let assetsDir;
    return {
        name: '@sugarat/theme-plugin-cover-transform',
        apply: 'build',
        enforce: 'pre',
        configResolved(config) {
            vitepressConfig = config.vitepress;
            assetsDir = vitepressConfig.assetsDir;
            blogConfig = config.vitepress.site.themeConfig.blog;
        },
        async generateBundle(_, bundle) {
            const assetsMap = Object.entries(bundle).filter(([key]) => {
                return key.startsWith(assetsDir);
            }).map(([_, value]) => {
                return value;
            });
            for (const page of blogConfig.pagesData) {
                const { cover } = page.meta;
                // 是否相对路径引用
                if (!cover?.startsWith?.('/')) {
                    continue;
                }
                try {
                    // 寻找构建后的
                    const realPath = path.join(vitepressConfig.root, cover);
                    if (!existsSync(realPath)) {
                        continue;
                    }
                    const fileBuffer = readFileSync(realPath);
                    const matchAsset = assetsMap.find(v => Buffer.compare(fileBuffer, v.source) === 0);
                    if (matchAsset) {
                        page.meta.cover = joinPath('/', matchAsset.fileName);
                    }
                }
                catch (e) {
                    vitepressConfig.logger.warn(e?.message);
                }
            }
        }
    };
}
export function providePageData(cfg) {
    return {
        name: '@sugarat/theme-plugin-provide-page-data',
        async config(config) {
            const pagesData = await getArticles(cfg, config.vitepress);
            config.vitepress.site.themeConfig.blog.pagesData = pagesData;
        },
    };
}
export function setThemeScript(themeColor) {
    let resolveConfig;
    const pluginOps = {
        name: '@sugarat/theme-plugin-theme-color-script',
        enforce: 'pre',
        configResolved(config) {
            if (resolveConfig) {
                return;
            }
            resolveConfig = config;
            const vitepressConfig = config.vitepress;
            if (!vitepressConfig) {
                return;
            }
            // 通过 head 添加额外的脚本注入
            const selfTransformHead = vitepressConfig.transformHead;
            vitepressConfig.transformHead = async (ctx) => {
                const selfHead = (await Promise.resolve(selfTransformHead?.(ctx))) || [];
                return selfHead.concat([
                    ['script', { type: 'text/javascript' }, `;(function() {
            document.documentElement.setAttribute("theme", "${themeColor}");
          })()`]
                ]);
            };
        }
    };
    return pluginOps;
}
