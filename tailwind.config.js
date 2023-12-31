module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: {
          100: "#d9d9d9",
          200: "#a1aebe",
          300: "#929fa5",
          400: "#76868e",
          600: "#5f6c72",
          700: "#475156",
          900: "#242e39",
          "100_01": "#c9cfd2",
          "100_02": "#d1d1d6",
          "200_01": "#adb7bc",
        },
        red: { 50: "#fff3eb", 400: "#ee5858" },
        amber: { A200: "#efd33d" },
        green: { 700: "#2db223" },
        black: { 900: "#000000", "900_01": "#050505", "900_14": "#00000014" },
        gray: {
          100: "#f1f1f5",
          300: "#e4e7e9",
          400: "#aeaeae",
          800: "#404040",
          900: "#191c1e",
          "900_1e": "#191c1e1e",
          "100_01": "#f2f3f4",
        },
        blue: { 500: "#2ca4f3", 700: "#0162dd" },
        indigo: {
          100: "#b9c8f3",
          400: "#5a6cb8",
          500: "#3f5ac5",
          900: "#213481",
        },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        montserrat: "Montserrat",
        publicsans: "Public Sans",
        manrope: "Manrope",
        signikanegative: "Signika Negative",
        signika: "Signika",
        cardo: "Cardo",
      },
      boxShadow: {
        bs: "0px 8px  24px 0px #191c1e1e",
        bs1: "40px 28px  80px 0px #00000014",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
