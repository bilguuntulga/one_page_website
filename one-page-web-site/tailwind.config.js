/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary-color': '#00B761'
    },
    extend: {
      fontFamily: {
        'primary-font': ['Montserrat'],
        'lato': ['Lato'],
        'garamond': ['Garamond']
      },
    }
    , fontWeight: {
      bold: '700',
    }

  },
  plugins: [],
}