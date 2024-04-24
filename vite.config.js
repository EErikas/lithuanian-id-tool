import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

const baseUrl = process.env.BASE_URL || '/';
// https://vitejs.dev/config/
export default defineConfig({
  base:baseUrl,
  plugins: [svelte()]
})
