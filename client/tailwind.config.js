/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        spacing: {
            xl: "1200px",
            lg: "992px",
            md: "768px",
            sm: "576px"
        },
        borderRadius: {
            o: "100%"
        }
      },

    },
    plugins: [],
  }