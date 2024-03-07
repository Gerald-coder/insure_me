/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      backgroundColor: {
        dim: "rgba(0, 0, 0, 0.1)",
        Gray: "#FAFAFA",
        btn: "25A5F0",
      },
      screens: { md: "970px" },
    },
  },
  plugins: [],
};
