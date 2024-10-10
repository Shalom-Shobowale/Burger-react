/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgtext:"#370617",
        bgBody: "#ffffff"
      },
      fontFamily:{
        Roboto:["Roboto","open sans"],
        Garamond:["mond", "open sans"],
        Archivo:["Archivo+Narrow", "open sans"]
      }
    },
  },
  plugins: [],
}

