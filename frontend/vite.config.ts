import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/FSY_tools/", // Change this to your repo name
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        notFound: "404.html", // Ensures 404.html is created
      },
    },
  }
});
