/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}", // all frontend files
    "./public/**/*.html"
  ],
  darkMode: 'class', // class-based dark mode toggle
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: 'var(--primary-color)',
        bg: 'var(--bg-color)',
        text: 'var(--text-color)',
        glassLight: 'rgba(255, 255, 255, 0.1)',
        glassDark: 'rgba(0, 0, 0, 0.2)',
      },
      borderRadius: {
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'glass': '0 12px 25px rgba(0,0,0,0.08)',
        'glass-hover': '0 18px 35px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
};
