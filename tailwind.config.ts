// tailwind.config.js
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      fontSize: {
        h1: '100pt',
        title: '38pt',
        description: '14pt',
      },
      colors: {
        background: "var(--background)",  // Main background color
        foreground: "var(--foreground)",  // Text color
        box1: "#FFD966",                  // Yellow box color
        box2: "#FAA474",                  // Orange box color
        box3: "#A894FC",                  // Purple box color
        box4: "#97DFFF",                  // Light blue box color
      },
    },
  },
  plugins: [],
};
export default config;
