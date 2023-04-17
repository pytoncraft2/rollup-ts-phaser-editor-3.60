// content of vite.config.js file which replaces webpack.config.js file
import { defineConfig } from 'vite'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: "static",
  build: {
    outDir: 'dist',
    assetsDir: 'asset-packs',
    minify: true,
    sourcemap: false,
    chunkSizeWarningLimit: 2000,
  },
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './static')
    },
  },
  server: {
    host: true
  }
})