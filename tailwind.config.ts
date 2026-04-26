import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e1edfe',
          200: '#c3dbfd',
          300: '#a4cafc',
          400: '#85b8fa',
          500: '#66a6f9',
          600: '#1451A6',
          700: '#1145a6',
          800: '#0f3a86',
          900: '#0c2e66',
        },
        secondary: {
          50: '#f3f8ff',
          100: '#e8f0ff',
          200: '#d1e1ff',
          300: '#bad3ff',
          400: '#a3c5ff',
          500: '#8cb7ff',
          600: '#3B82F6',
          700: '#3575de',
          800: '#2c61be',
          900: '#234d9e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
