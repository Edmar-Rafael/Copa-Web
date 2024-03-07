/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },

      backgroundImage: {
        app: 'url(/bg-effects.png)'
      },

      colors: {
        ignite: {
          500: '#129e57'
        },
        gray: {
          900: '#121214',
          800: '#202024',
          600: '#323238',
          300: '#8d8d99',
          100: '#e1e1e6'
        },
        yellow: {
          700: '#e5cd3d',
          500: '#f1dd43'
        }
      }
    },
  },
  plugins: [],
}
