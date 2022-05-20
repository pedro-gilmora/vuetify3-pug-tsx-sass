import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueTsx from '@vitejs/plugin-vue-jsx'
// @ts-ignore
import vuetify from '@vuetify/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({}),
    vueTsx({}),
    vuetify({
      autoImport: true,
      
    })
  ],
  resolve: {
    alias: {
      '@/':'./'
    }
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  // @ts-ignore
  rollupOptions: {
  	output: {
  	  inlineDynamicImports: true
  	}
  }
})
