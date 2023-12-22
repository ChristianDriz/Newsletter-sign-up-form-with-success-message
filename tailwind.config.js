/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Light-Tomato': 'hsl(5, 100%, 95%)',
        'Tomato': 'hsl(4, 100%, 67%)',
        'Dark-Tomato': 'hsl(356, 100%, 68%)',
        'Dark-Slate-Grey': 'hsl(234, 29%, 20%)',
        'Charcoal-Grey': 'hsl(235, 18%, 26%)',
        'Grey': 'hsl(231, 7%, 60%)',
        'White': 'hsl(0, 0%, 100%)',
      },
    },
    fontFamily: {
      'roboto': 'Roboto',
    },
    fontSize: {
      '56': ['3.5rem', {lineHeight: '3.5rem',}],
      '40': ['2.5rem', {lineHeight: '2.5rem',}],
    },
  },
  plugins: [],
}

