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
        "BillOfMaterials-bg": "#F3F3F3",
        "Disabled-input": {
          DEFAULT: "#E9ECEF",
          SUB: "#EEEEEE",
        },
      },
      gridTemplateColumns: {
        layOut: "auto 1fr",
        dateAndRefrece: "1fr 1fr",
        finishedItem: "0.5fr 1fr",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      fontSize: {
        tableHead: "12.5px",
        tableData: "12px",
        labelSize: "15px",
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
      animation: {
        showFilter: "filterDisplay 0.7s linear forwards ",
        hideFilter: "filterHide 0.7s linear forwards ",
      },
      keyframes: {
        filterDisplay: {
          "0%": { "max-height": "0px" },
          "100%": { "max-height": "500px" },
        },
        filterHide: {
          "0%": { "max-height": "500px" },
          "100%": { "max-height": "0px" },
        },
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
