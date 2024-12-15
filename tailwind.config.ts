import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "44vw": "44vw",
        "56vw": "56vw",
      },
      height: {
        "44vh": "44vh",
      },
      colors: {
        brand: {
          green: {
            500: "#243831",
            300: "#2B5F44",
            100: "#D8E9E4",
          },
          golden: "#C5A365",
          grey: {
            100: "#BBC2C0",
            300: "#939494",
          },
          base: {
            black: "#000000",
            white: "#FFFFFF",
            text: "#191919",
          },
          success: "#49A569",
        },
      },
      fontFamily: {
        castoro: ["Castoro", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        xl: "28px",
        lg: "24px",
      },
    },
  },
  plugins: [],
} satisfies Config;
