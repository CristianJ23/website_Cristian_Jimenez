import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const repoName = '/website_Cristian_Jimenez/';

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      animation: {
        'scroll-x': 'scroll-x 30s linear infinite',
        'scroll-x-reverse': 'scroll-x-reverse 30s linear infinite',
      },
      keyframes: {
        'scroll-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-x-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  base: repoName,
  plugins: [react(),
        tailwindcss(),
        

  ],
})
