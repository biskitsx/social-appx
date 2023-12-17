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
        width: {
            '128': '32rem',
            '540': '540px',
            '720': '720px',
            '960': '960px',
            '1140': '1140px',
            '1320': '1320px',
        },
        borderRadius: {
            o: "100%"
        }
      },

    },
    plugins: [],
  }