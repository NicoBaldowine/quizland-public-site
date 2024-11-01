/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['var(--font-outfit)'],
      },
      colors: {
        'gradient-end': '#BBB8B8',
        'feature-yellow': '#FEDE67',
        'feature-orange': '#FF9A62',
        'feature-purple': '#C9A0FF',
        'feature-blue': '#94DBFB',
      },
      animation: {
        float: 'float 20s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(5%, 5%) rotate(5deg)' },
          '50%': { transform: 'translate(10%, -5%) rotate(-5deg)' },
          '75%': { transform: 'translate(-5%, 5%) rotate(5deg)' },
        },
      },
    },
  },
  plugins: [],
}
