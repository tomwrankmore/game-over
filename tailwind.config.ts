import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poster: ['poster-gothic-round-atf', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
