/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      backgroundColor: {
        dim: "rgba(0, 0, 0, 0.1)",
      },
      screens: { md: "970px" },
    },
  },
  plugins: [],
};
