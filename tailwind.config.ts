import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    // รวมไฟล์ทั้งหมดที่ใช้ Tailwind CSS เช่น app, pages, หรือ components
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            500: "#1F3D32",
            300: "#2F5E49",
            100: "#E0F0E8",
          },
          golden: "#C19A5B",
          grey: {
            100: "#C4C9C7",
            300: "#8F9291",
          },
          base: {
            black: "#000000",
            white: "#FFFFFF",
            text: "#1A1A1A",
          },
          success: "#4BA35F",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
