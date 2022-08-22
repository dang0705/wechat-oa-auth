import { defineConfig } from 'vite';
import { resolve } from 'path';
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './index.js'),
      name: 'wechat-oa-auth',
      formats: ['umd']
    }
  }
});
