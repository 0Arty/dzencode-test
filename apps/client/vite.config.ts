import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]

export default defineConfig({
   plugins: [react(), svgr()],
   base: repo ? `/${repo}/` : `/`,

   resolve: {
      alias: {
         '@app': fileURLToPath(new URL('./src/app', import.meta.url)),
         '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
         '@features': fileURLToPath(new URL('./src/features', import.meta.url)),
         '@entities': fileURLToPath(new URL('./src/entities', import.meta.url)),

         '@widgets': fileURLToPath(new URL('./src/widgets', import.meta.url)),
         '@shared': fileURLToPath(new URL('./src/shared', import.meta.url)),
         '@api': fileURLToPath(new URL('./src/shared/api', import.meta.url)),
         '@config': fileURLToPath(new URL('./src/shared/config', import.meta.url)),
         '@hooks': fileURLToPath(new URL('./src/shared/hooks', import.meta.url)),

         '@assets': fileURLToPath(new URL('./src/shared/assets', import.meta.url)),
         '@images': fileURLToPath(new URL('./src/shared/assets/images', import.meta.url)),
         '@icons': fileURLToPath(new URL('./src/shared/assets/icons', import.meta.url)),

         '@styles': fileURLToPath(new URL('./src/app/styles', import.meta.url)),
         '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
   },
   css: {
      preprocessorOptions: {
         scss: {
            additionalData: `@use "@styles/helpers/_index.scss" as *;`,
         },
      },
   },

   server: {
      port: 3000,
      open: true,
   },

   build: {
      outDir: 'dist',
      sourcemap: false,
   },
})
