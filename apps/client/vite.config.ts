import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'
import dotenv from 'dotenv'
import path from 'path'

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
dotenv.config({ path: path.resolve(__dirname, '../../.env') })

export default defineConfig({
   envDir: path.resolve(__dirname, '../../'),

   plugins: [react(), svgr(), tsconfigPaths()],
   base: repo ? `/${repo}/` : '/',
   resolve: {
      alias: {
         '@styles': path.resolve(__dirname, './src/app/styles'),
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
      port: parseInt(process.env.CLIENT_PORT || '5173', 10),
      open: true,
   },
   build: {
      outDir: 'dist',
      sourcemap: false,
   },
})
