/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        blue: 'rgba(0, 120, 202, 1)',
        darkBlue: 'rgba(0, 98, 208, 1)',
        darkRed: 'rgba(200, 21, 25, 1)',
        green: 'rgba(33, 143, 75)',
        yellow: 'rgba(255, 200, 21, 1)',
      },
      fontSize: { tiny: { fontSize: '10px', lineHeight: '14px' } },
      gridTemplateColumns: {
        13: 'repeat(13, minmax(0, 1fr))',
        14: 'repeat(14, minmax(0, 1fr))',
        15: 'repeat(15, minmax(0, 1fr))',
        16: 'repeat(16, minmax(0, 1fr))',
      },
      minHeight: {
        'screen-1/3': '33.33vh',
        'screen-1/2': '50vh',
      },
      textColor: {
        darkRed: 'rgba(200, 21, 25, 1)',
        yellow: 'rgba(255, 200, 21)',
      },
    },
  },
  plugins: [],
};
