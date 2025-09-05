
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#0f1115',
          card: '#171a21',
          border: '#232735',
        },
        brand: {
          green: '#3ba55c',
          purple: '#6a5acd',
          yellow: '#eab308',
        },
        skill: {
          'gray': '#4b5563',
          'dull-green': '#4d7c5c',
          'green': '#3ba55c',
          'dark-green': '#2a8a4a',
        }
      },
      borderRadius: {
        '2xl': '1rem',
      }
    },
  },
  plugins: [],
}
export default config
