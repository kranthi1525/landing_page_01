/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}", // adjust depending on your project
    ],
    theme: {
      extend: {
        screens: {
            smm : "550px",
            xs: "480px",
            xxs: "360px",
          },
      },
    },
    plugins: [],
  }
  