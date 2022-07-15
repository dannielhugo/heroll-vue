/// <reference types="vitest" />
import path from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
const pathSrc = path.resolve(__dirname, 'src');

export default defineConfig({
  resolve: {
    alias: {
      '@': pathSrc,
    },
  },
  plugins: [Vue()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
