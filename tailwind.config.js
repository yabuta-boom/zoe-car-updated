/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4fa',
          100: '#d9e2f5',
          200: '#b3c5eb',
          300: '#8da8e0',
          400: '#668bd6',
          500: '#406ecc',
          600: '#3358a3',
          700: '#26427a',
          800: '#1A2C52',
          900: '#0D1629',
        },
        secondary: {
          50: '#fbf9f2',
          100: '#f6f0d9',
          200: '#ede2b3',
          300: '#e4d38d',
          400: '#dbc566',
          500: '#D4AF37', // Gold accent
          600: '#a98c2c',
          700: '#7f6921',
          800: '#554616',
          900: '#2a230b',
        },
        neutral: {
          50: '#f8f9fa',
          100: '#eaedf0',
          200: '#d5dbe1',
          300: '#b0bac3',
          400: '#8494a4',
          500: '#637688',
          600: '#4c5a6a',
          700: '#3d4855',
          800: '#2d3540',
          900: '#1a1f26',
        },
      },
      fontFamily: {
        'display': ['"Playfair Display"', 'serif'],
        'sans': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 8px 30px -2px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};