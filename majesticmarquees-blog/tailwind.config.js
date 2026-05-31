/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#faf6ec',
          100: '#f4ecd9',
          200: '#ede1c4',
        },
        forest: {
          500: '#586b4f',
          600: '#475a40',
          700: '#3a4a3a',
          800: '#3f503c',
          900: '#23301f',
        },
        tan: {
          400: '#bd9676',
          500: '#a57b5b',
          600: '#8c6849',
        },
        ink: '#1f2519',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '70ch',
      },
    },
  },
  plugins: [],
};
