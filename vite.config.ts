import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import pug from 'vite-plugin-pug';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({

  resolve: {
      alias: {
          // @ts-ignore
          '@': path.resolve(__dirname, "src")
      }
  },
  plugins: [
    pug({pretty: true}),
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    })
  ],
});
