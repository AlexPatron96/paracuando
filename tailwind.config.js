
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
		extend: {
		  colors: {
      appBlue: '#1B4DB1',
      appYellow: '#F3F243',
      appPink: '#FF64BC',
      appBlack: '#000000',
      appBlackLight: '#1A1E2E',
      appGrayDark: '#6E6A6C',           
      appGray: '#A7A6A7',
      appGrayLight: '#D9D9D9',
      appGrayLighter: '#F8F7FA',
      appRed: '#EF3F47',
		  },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'title1Size': '48px',
        'subtitleSize': '16px',
        'title2Size': '24px',
        'title3Size': '20px',
        'text1Size': '15px',
        'text2Size': '14px',
      },
      fontWeight: {
        'text2Weight': 500,
        'text1Weight': 400,
        'subtitle2Weight': 400,
        'subtitle1Weight': 500,
        'title2Weight': 500,
        'title3Weight': 600,
        'titleWeight': 900,
      },
      fontStyle: {
        'italic': 'italic',
        'normal': 'normal',
      },
      lineHeight: {
        'title1Height': '48px',
        'subtitleHeight': '19px',
        'title2Height': '28px',
        'title3Height': '23px',
        'text1Height': '18px',
        'text2Height': '16px',
      },
    },
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
  },
  plugins: [],
};