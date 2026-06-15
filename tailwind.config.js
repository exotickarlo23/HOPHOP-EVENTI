/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // [UREDI: zamijeni s točnim Hop Hop brand bojama iz napuhanci repoa]
        brand: {
          50: "#fff5f7",
          100: "#ffe4ea",
          200: "#ffc4d0",
          300: "#ff97ad",
          400: "#ff6285",
          500: "#ff3366", // primarni Hop Hop pink
          600: "#e61f55",
          700: "#bf1546",
          800: "#971138",
          900: "#73102d",
        },
        sun: {
          // sekundarni — sunčano žuta (Hop Hop veselje)
          400: "#ffd24d",
          500: "#ffc01e",
          600: "#e6a800",
        },
        sky: {
          400: "#5ec8ff",
          500: "#2eb1ff",
          600: "#0a91e6",
        },
        ink: {
          900: "#1a1130",
          800: "#2a1e4a",
          700: "#3b2c66",
          500: "#6b5e8a",
          400: "#8d83a8",
        },
        cream: "#fff9f0",
      },
      fontFamily: {
        // [UREDI: zamijeni s istim fontovima kao napuhanci]
        display: ['"Fredoka"', "system-ui", "sans-serif"],
        sans: ['"Nunito"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.75rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        blob: "2.5rem",
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(255, 51, 102, 0.25)",
        card: "0 18px 40px -16px rgba(26, 17, 48, 0.18)",
        pop: "0 8px 0 0 rgba(26, 17, 48, 0.08)",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        spin360: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        spin360: "spin360 12s linear infinite",
      },
    },
  },
  plugins: [],
};
