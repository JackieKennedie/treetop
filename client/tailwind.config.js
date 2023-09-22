/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cream": "#ffffed",
        "teal-post": "#276153",
        "teal-post-bg": "#1b3d35",
      },
      boxShadow: {
        '3xl': 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      },
      spacing: {
        '128': '36rem',
        '120': '30rem',
      },
    },
  },
  plugins: [],
}