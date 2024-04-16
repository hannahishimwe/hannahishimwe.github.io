import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    exclude: ['vue'],
    include: ['vue/dist/vue.esm-bundler.js'], // or the appropriate URL for your Vue version
  },
});
