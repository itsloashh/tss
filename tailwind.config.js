/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: '#4ade80',
          light: '#bbf7d0',
          dark: '#166534',
        },
      },
    },
  },
  plugins: [],
}
