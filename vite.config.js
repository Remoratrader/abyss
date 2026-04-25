import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    entries: ['index.html'] // Apenas escaneie o index.html na raiz do projeto
  }
});
