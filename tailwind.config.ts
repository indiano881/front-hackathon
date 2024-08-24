import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "c-purple": "#6A0DAD",
        "c-green":  "#C7EA46",
        "d-purple": "#32174D",
        "c-pink": "#DDA0DD",
        "c-yellow": "#F9E076",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
      },
      keyframes: {
        splash: {
          '0%': { transform: 'scale(0)', opacity: 0 },
          '50%': { transform: 'scale(1.1)', opacity: 1 },
          '100%': { transform: 'scale(1)', opacity: 0 },
        },
      },
      animation: {
        splash: 'splash 2s ease-in-out forwards',
      }
    },
  },
  plugins: [],
};
export default config;
