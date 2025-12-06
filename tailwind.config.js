/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#00df45",
        "background-light": "#f3f4f6",
        "background-dark": "#161b22",
        "surface-dark": "#1f242d",
        "text-light": "#333333",
        "text-dark": "#ffffff",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
      boxShadow: {
        neon: "0 0 15px rgba(0, 223, 69, 0.5)",
      },
      // Adding animation for typing cursor if needed in config, but CSS is fine too.
      // We can extend animations here if we want to be "pure" tailwind, but custom CSS is simpler for specific keyframes.
    },
  },
  plugins: [],
}
