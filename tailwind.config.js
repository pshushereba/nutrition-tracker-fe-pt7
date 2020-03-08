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
      "0": "0px",
      "halfCircle-X": "21px",
      "halfCircle-Y": "8px",
      "halfCircle|X": "22px",
      "halfCircle|Y": "4px"
    }),
    textColor: theme => ({
      ...theme('colors'),
      footerText: "#5A5A5A"
    }),
    extend: {}
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'disabled', 'group-hover'],
    borderColor: ['responsive', 'hover', 'focus', 'active', 'disabled', 'group-hover']
  },
  plugins: []
};
