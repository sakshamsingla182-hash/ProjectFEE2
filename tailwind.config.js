/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#12121C',
          soft: '#1B1B29',
          softer: '#242438',
        },
        cream: {
          DEFAULT: '#FAF6EE',
          soft: '#F2ECDD',
        },
        saffron: {
          50: '#FDF3E3',
          100: '#FBE6C2',
          200: '#F5CC85',
          300: '#EEB24C',
          400: '#E29B34',
          500: '#CC8524',
          600: '#A8691A',
          700: '#7E4F14',
        },
        peacock: {
          50: '#E4F3F1',
          100: '#BCE0DB',
          200: '#7FC2B9',
          300: '#3E9C90',
          400: '#0F6E67',
          500: '#0B5A54',
          600: '#08423E',
          700: '#062E2B',
        },
        maroon: {
          400: '#9C3159',
          500: '#7A2048',
          600: '#5C1636',
          700: '#3E0E24',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        body: ['"Karla"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        lift: '0 20px 60px -15px rgba(18, 18, 28, 0.35)',
      },
    },
  },
  plugins: [],
}
