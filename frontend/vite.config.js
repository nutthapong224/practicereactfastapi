import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // <-- ตั้งเป็น '/' ถ้า app รัน root domain หรือ '/subpath/' ถ้าอยู่ subpath
})
