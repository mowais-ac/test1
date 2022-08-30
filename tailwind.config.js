module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        gray_501: "#9f9f9f",
        gray_301: "#e5ddd9",
        gray_500: "#b5a9a2",
        gray_400_34: "#ccbfb433",
        lime_100_3f: "#f3e4ce3f",
        yellow_900: "#e36d29",
        gray_900: "#372c26",
        gray_400_33: "#ccbcb133",
        white_A700: "#ffffff",
        gray_300: "#e6ddd8",
        gray_100: "#f6f2ef",
      },
      borderRadius: { radius8: "8px", radius24: "24px", radius50: "50%" },
      boxShadow: { bs: "0px 2px  3px 0px #ccbfb433" },
      fontFamily: { lato: "Lato", icofont: "IcoFont" },
      textShadow: { ts: "0px 7px  9px #ccbcb133" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
