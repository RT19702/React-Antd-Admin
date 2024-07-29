import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path' // 关键代码

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 关键代码
      '@': path.resolve(__dirname, './src')
    }
  },
  // server config
  server: {
    proxy: {
      "/api": {
        target: "https://mock.mengxuegu.com/mock/62abda3212c1416424630a45", // easymock
        // target: "https://mock.mengxuegu.com/mock/66a3541b904326081fb3c053", // easymock
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, "")
      }
    }
  },
})
