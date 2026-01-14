/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E04B7A',
        secondary: '#FF7E5F',
        accent: '#FFD1B3',
        background: '#FFF7F5',
        surface: '#FFFFFF',
        border: '#F2C3B3',
        success: '#9ED09E',
        warning: '#F6B97A',
        error: '#E57373',
        text: {
          primary: '#3B2F2F',
          secondary: '#7B5E5E',
          light: '#BFA5A5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
