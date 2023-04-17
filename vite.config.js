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


import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: "dist",
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './dist/assets')
    },
  },
  optimizeDeps: {
    include: ['./dist/game.js']
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  }
});