const plugin = require("tailwindcss/plugin");

module.exports = {
  theme: {
    backgroundColor: theme => ({
      ...theme("colors"),
      plusPink: "#FF19A3",
      headFoot: "#363537",
      mobileFoot: "#F9F9F9"
    }),
    inset: theme => ({
      "halfCircle-X": "21px",
      "halfCircle-Y": "8px",
      "halfCircle|X": "22px",
      "halfCircle|Y": "4px"
    }),
    textColor: theme => ({
      ...theme('colors'),
      footerText: "#5A5A5A"
    }),
    // colors: {
    //   app: {
    //     primary: '#6C63FF'
    //   },
    //   myText: {
    //     white: 'white'
    //   }
    // },
    extend: {}
  },
  variants: {},
  plugins: []
};
