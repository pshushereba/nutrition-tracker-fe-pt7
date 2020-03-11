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
    extend: {
      colors: {
        'soft-gray': '#e5e5e5',
        'dark-gray': '#5A5A5A',
        'btn-pink': '#FE42B3',
        'active-blue': '#8D4CFF',
        'item-hover': '#FFA5DB'
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: []
};
