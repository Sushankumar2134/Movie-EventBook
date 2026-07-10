import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      react: resolve(fileURLToPath(new URL(".", import.meta.url)), "node_modules/react"),
      "react-dom": resolve(fileURLToPath(new URL(".", import.meta.url)), "node_modules/react-dom"),
      "react-router-dom": resolve(fileURLToPath(new URL(".", import.meta.url)), "node_modules/react-router-dom")
    },
    dedupe: ["react", "react-dom", "react-router-dom"]
  }
});
