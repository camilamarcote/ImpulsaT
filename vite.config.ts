import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/ImpulsaT/',  // 👈 esto debe ser el nombre de tu repo
  plugins: [react()],
})