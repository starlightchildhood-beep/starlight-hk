import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: "#0F1629",
          light: "#1a2744",
        },
        starlight: {
          gold: "#D4AF37",
          goldLight: "#E5C76B",
        },
        moonlight: {
          DEFAULT: "#F8F6F0",
          gray: "#E8E6E1",
        },
        rosegold: "#B76E79",
        fresh: {
          blue: "#3B82F6",
          green: "#10B981",
        },
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        noto: ["var(--font-noto-sans-hk)", "sans-serif"],
      },
      spacing: {
        section: "5rem",
      },
    },
  },
  plugins: [],
};
export default config;
