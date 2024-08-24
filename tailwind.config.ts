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
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-100%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          },
        },
      },
      animation: {
        bounce: 'bounce 1s infinite',
      },
    },
  },
  plugins: [],
};
export default config;
