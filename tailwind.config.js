module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "sideBar-toggle": "#eb3c33",
        "main-shadow": "#AAAAAA",
        "table-bg": "#F7F7F7",
        "section-border": "#E5D7D7",
      },
      gridTemplateColumns: {
        layOut: "auto 1fr",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
      },
      boxShadow: {
        "3xl": [
          "0 -1px 2px #FAFAFA",
          "0 2px 3px #AAAAAA",
          "0 3px 5px #AAAAAA",
          "0 7px 8px #AAAAAA",
        ],
      },
      spacing: {
        "1/2": "2px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
