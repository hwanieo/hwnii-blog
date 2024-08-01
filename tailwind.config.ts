import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'move-around': {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(200px, 100px)' },
          '50%': { transform: 'translate(0, 200px)' },
          '75%': { transform: 'translate(-200px, 100px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
      animation: {
        'move-around': 'move-around 20s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: 'selector',
  plugins: [require('tailwind-scrollbar-hide')],
};
export default config;
