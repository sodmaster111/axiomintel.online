/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,md,mdx,tsx,ts,jsx,js}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0B1224',
        accent: '#6EE7B7',
        slate: '#94A3B8'
      }
    }
  },
  plugins: []
};
