/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      prim: "var(--glow-color)",
      prima: "var(--glow-color-alpha)",
      // prim: "#ff5500",
      // prima: "#ff5500aa",
    },
  },
  plugins: [],
};
