import { defineConfig } from 'vite'

export default defineConfig({
  // Racine du projet
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      // Toutes tes pages HTML
      input: {
        main:       'index.html',
        experience: 'experience.html',
        skills:     'skills.html',
      }
    }
  }
})
