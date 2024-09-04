import path from 'path'
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/theme.ts'],
  outDir: path.resolve(__dirname, './dist'),
  format: ['cjs', 'esm'],  
  dts: true,
  external: ['vitepress'],
  noExternal: ['vitepress-plugin-tabs'],
  silent: true
})
