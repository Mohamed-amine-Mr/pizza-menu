import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react';

// import "index.css"
export default defineConfig({
  plugins: [react(), tailwindcss()],

})