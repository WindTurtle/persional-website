module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.{js,jsx,ts,tsx,vue}",
    "./public/index.html",
    "./src/components/**/*.{jsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      screens: {
        xs: "480px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1600px",
        "2xl": "1600px",
      },
    },
    colors: {
      // primary: "#4275FA",
      primary: {
        main: "#4275FA",
        light: "rgba(24, 100, 215, 0.43)",
      },
      secondary: "#2E2D56",
      border: "#6D6D6D",
      light: "#929292",

      white: "#FFFFFF",
      whiteLight: "#F2F2F2",
      sub: "#5F5E79",
      background: "#294BA1",
      gradient: "linear-gradient(to right bottom, #4275FA, #294BA1)",
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
