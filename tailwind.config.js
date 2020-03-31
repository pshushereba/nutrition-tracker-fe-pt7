const plugin = require("tailwindcss/plugin");

module.exports = {
  theme: {
    theme: {
      customForms: theme => ({
        default: {
          radio: {
            icon: iconColor => '<svg width="26" height="31" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.25 15.6406C23.25 21.3015 18.6609 25.8906 13 25.8906C7.33908 25.8906 2.75 21.3015 2.75 15.6406C2.75 9.97971 7.33908 5.39062 13 5.39062C18.6609 5.39062 23.25 9.97971 23.25 15.6406Z" fill="white" stroke="#5A5A5A" stroke-width="1.5"/></svg>',
            iconColor: theme("colors.pink.400"),
            '&active': {
              icon: '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22Z" fill="#8D4CFF"/></svg>',
            }
          }
        }
      })
    },
    backgroundColor: theme => ({
      ...theme("colors"),
      plusPink: "#FF19A3",
      headFoot: "#363537",
      mobileFoot: "#F9F9F9",
      chartPurple: "#DAC5FF"
    }),
    inset: theme => ({
      "halfCircle-X": "21px",
      "halfCircle-Y": "8px",
      "halfCircle|X": "22px",
      "halfCircle|Y": "4px"
    }),
    textColor: theme => ({
      ...theme("colors"),
      footerText: "#5A5A5A"
    }),
    extend: {
      colors: {
        "soft-gray": "#e5e5e5",
        "dark-gray": "#5A5A5A",
        "btn-pink": "#FE42B3",
        "active-blue": "#8D4CFF",
        "item-hover": "#FFA5DB",
        "pink-200": "#FFEDF7",
        "pink-300": "#FFA5DB",
        "pink-400": "#FE42B3",
        "pink-500": "#FF19A3",
        "teal-100": "#ACF3F8",
        "teal-200": "#82F7FF",
        "teal-300": "#24EEFB",
        "teal-400": "#00E2F0",
        "green-100": "#D5E2A2",
        "green-200": "#B5CD57",
        "green-300": "#A5CE03",
        "green-400": "#CCFF00",
        "purple-100": "#DAC5FF",
        "purple-200": "#D7B8FF",
        "purple-300": "#BF9BFF",
        "purple-400": "#A674FF",
        "purple-500": "#8D4CFF",
        "gray-10": "#F9F9F9",
        "gray-100": "#B7B7B7",
        "gray-200": "#797979",
        "gray-300": "#5A5A5A",
        "gray-400": "#363537",
        "mr-96": "24rem"
      }
    }
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"]
  },
  plugins: [require("@tailwindcss/custom-forms")]
};
