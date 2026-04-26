/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6", // Blue accent
        dark: "#0B0F19",
        card: "#111827",
        text: "#E5E7EB",
      },
    },
  },
  plugins: [],
};
