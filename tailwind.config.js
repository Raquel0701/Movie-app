/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',      // Archivos dentro de la carpeta 'app'
    './src/pages/**/*.{js,ts,jsx,tsx}',    // Archivos dentro de la carpeta 'pages'
    './src/components/**/*.{js,ts,jsx,tsx}', // Archivos dentro de la carpeta 'components'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
