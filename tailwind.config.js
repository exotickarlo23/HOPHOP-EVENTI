/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        // Hop Hop brand sustav (uskladjeno s hophop-napuhanci.com)
        // Primary - plava iz logotipa
        primary: {
          50: "#eff9fe",
          100: "#d9f1fc",
          200: "#b1e3f9",
          300: "#7cd1f4",
          400: "#3cb8ec",
          500: "#0EA5E9", // hsl(196 91% 48%)
          600: "#0884c1",
          700: "#08699c",
          800: "#0a567f",
          900: "#0e486a",
          foreground: "#ffffff",
        },
        // Secondary - crvena iz logotipa
        secondary: {
          50: "#fef3f2",
          100: "#fde5e3",
          200: "#fbcfcb",
          300: "#f7aca7",
          400: "#f17b75",
          500: "#ED3F39", // hsl(4 91% 58%)
          600: "#d9342e",
          700: "#b62924",
          800: "#962522",
          900: "#7d2421",
          foreground: "#ffffff",
        },
        // Accent - zelena
        accent: {
          50: "#f6fbe7",
          100: "#ebf5cc",
          200: "#d8ec9b",
          300: "#bfdf63",
          400: "#a7cc34",
          500: "#8ab026", // hsl(67 76% 53%)
          600: "#6c8e1d",
          700: "#536d1c",
          800: "#43571c",
          900: "#384a1c",
          foreground: "#0f172a",
        },
        // Warning - žuta (CTA gumbi)
        warning: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde486",
          300: "#fcd24a",
          400: "#fbbf24",
          500: "#FCBC2C", // hsl(39 97% 58%)
          600: "#d99312",
          700: "#b46c0e",
          800: "#925312",
          900: "#794414",
          foreground: "#0f172a",
        },
        // Orange (sekundarni dekorativni)
        orange: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#F97316", // hsl(24 95% 53%)
          600: "#ea580c",
          foreground: "#ffffff",
        },
        // Foreground / muted / background tokens
        background: "#ffffff",
        foreground: "#111827", // hsl(221 39% 11%)
        muted: {
          DEFAULT: "#f1f5f9",
          foreground: "#64748b",
        },
        border: "#e2e8f0",
        // Backward compat: brand alias = primary plava
        brand: {
          50: "#eff9fe",
          100: "#d9f1fc",
          200: "#b1e3f9",
          300: "#7cd1f4",
          400: "#3cb8ec",
          500: "#0EA5E9",
          600: "#0884c1",
          700: "#08699c",
          800: "#0a567f",
          900: "#0e486a",
        },
        // Backward compat: ink (dark navy text)
        ink: {
          900: "#111827",
          800: "#1f2937",
          700: "#374151",
          600: "#4b5563",
          500: "#6b7280",
          400: "#9ca3af",
        },
        cream: "#f8fafc",
      },
      fontFamily: {
        display: ['"Fredoka"', "system-ui", "sans-serif"],
        sans: ['"Nunito"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1rem",
        sm: "0.75rem",
        lg: "1rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        blob: "2.5rem",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #0EA5E9, #38bdf8)",
        "gradient-secondary": "linear-gradient(135deg, #ED3F39, #f87171)",
        "gradient-fun": "linear-gradient(135deg, #0EA5E9, #ED3F39, #FCBC2C)",
        "gradient-hero": "linear-gradient(135deg, #0EA5E9, #ED3F39)",
      },
      boxShadow: {
        playful: "0 8px 25px -8px rgba(14, 165, 233, 0.35)",
        card: "0 4px 20px -4px rgba(0, 0, 0, 0.1)",
        mascot: "0 10px 30px -10px rgba(237, 63, 57, 0.4)",
        soft: "0 10px 30px -10px rgba(14, 165, 233, 0.25)",
        pop: "0 8px 0 0 rgba(17, 24, 39, 0.08)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "hop-bounce": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        spin360: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        floaty: "floaty 6s ease-in-out infinite",
        "hop-bounce": "hop-bounce 4s ease-in-out infinite",
        spin360: "spin360 12s linear infinite",
        "scroll-left": "scroll-left 30s linear infinite",
      },
    },
  },
  plugins: [],
};
