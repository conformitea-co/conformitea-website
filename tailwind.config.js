/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md"],
  theme: {
    extend: {
      colors: {
        'brand-teal': '#1a5f6e',
        'brand-orange': '#e47c24',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    }
  },
  plugins: [],
};
