import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/koszabi7.github.io/', // Ha saját domaint használsz. Ha nem, akkor '/repo-neve/'
})
