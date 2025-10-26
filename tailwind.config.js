/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#1e1e1e',
          surface: '#252525',
          border: '#333333',
          text: '#e0e0e0',
          'text-muted': '#999999',
        },
        light: {
          bg: '#f5f5f5',
          surface: '#ffffff',
          border: '#e0e0e0',
          text: '#1a1a1a',
          'text-muted': '#666666',
        },
        accent: {
          DEFAULT: '#3b82f6',
          hover: '#2563eb',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      }
    },
  },
  plugins: [],
}
