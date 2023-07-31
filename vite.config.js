import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import Markdown from 'vite-plugin-vue-markdown'
import path from 'node:path'
import Pages from 'vite-plugin-pages'
import generateSitemap from 'vite-plugin-pages-sitemap'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Pages({
      onRoutesGenerated: routes => (generateSitemap({ routes })),
    }),
    Markdown(),
    VitePWA({
      injectRegister: 'auto'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'components': path.resolve(__dirname, './src/components'),
    }
  }
})
