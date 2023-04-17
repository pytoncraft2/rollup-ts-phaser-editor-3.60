// import { defineConfig } from 'vite'
// const path = require('path')

// // https://vitejs.dev/config/
// export default defineConfig({
//   publicDir: "dist",
//   resolve:{
//     alias:{
//       '@' : path.resolve(__dirname, './dist/assets')
//     },
//   },
//   optimizeDeps: {
//     include: ['./dist/game.js']
//   },
//   build: {
//     rollupOptions: {
//       input: {
//         main: 'dist/index.html'
//       }
//     }
//   }
// })


// import path from 'path';
// import { defineConfig } from 'vite';

// export default defineConfig({
//   publicDir: "dist",
//   resolve:{
//     alias:{
//       '@' : path.resolve(__dirname, './dist/assets')
//     },
//   },
//   optimizeDeps: {
//     include: ['./dist/game.js']
//   },
//   build: {
//     rollupOptions: {
//       input: {
//         main: 'index.html'
//       }
//     }
//   }
// });

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