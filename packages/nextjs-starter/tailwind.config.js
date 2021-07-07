module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./frontastic/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        '1-340': '1fr 340px',
        '120-1xfr': '120px 1fr',
        '1.25rem-1fr-1.25rem-1fr-1.25rem': '1.25rem 1fr 1.25rem 1fr 1.25rem',
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
