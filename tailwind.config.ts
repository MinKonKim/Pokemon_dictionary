import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /bg-[(colors)]/,
    },
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        fire: "#ff6b6b",
        water: "#4dabf7",
        electric: "#ffd43b",
        grass: "#69db7c",
        ice: "#90e0ef",
        fighting: "#e03131",
        poison: "#9b2226",
        ground: "#e9c46a",
        flying: "#a0c4ff",
        psychic: "#ba94d1",
        bug: "#6c757d",
        rock: "#e9c46a",
        ghost: "#7048e8",
        dragon: "#4d194d",
        dark: "#343a40",
        steel: "#adb5bd",
        fairy: "#f06595",
      },
    },
  },
  plugins: [],
};
export default config;
