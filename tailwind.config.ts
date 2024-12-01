import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        domine: ['Domine', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'glass-bottle': 'url(\'/assets/images/glass-bottle.png\')',
        'vineo-logo': 'url(\'/assets/images/vineo-logo.svg\')',
        'home-background': 'url(\'/assets/images/homebg.png\')',
        'custom-gradient': 'linear-gradient(174.81deg, rgba(249, 246, 239, 0) -171.89%, rgba(247, 138, 121, 0.82) 15.79%, #F78A79 53.19%, #F78A79 95.25%)',
        'hand-gradient': 'linear-gradient(142deg, rgba(243,239,234,1) 0%, rgba(225,220,211,1) 100%);',
        'second-gradient': 'linear-gradient(142deg, rgba(249,249,249,1) 0%, rgba(244,244,244,1) 10%, rgba(255,255,255,1) 61%, rgba(255,255,255,1) 100%);',
        'secondBg': 'url(\'/assets/images/homepage/secondbg.jpg\')',
        'fifthBg': 'url(\'/assets/images/homepage/fifthBg.png\')',
        'footerGrad': 'linear-gradient(176.41deg, #FEFDFC 52.27%, #E0DBD2 77.73%, #E0DBD2 89.52%)',
        'cardGrad': ' linear-gradient(178.4deg, rgba(255, 255, 255, 0.5) -15.1%, rgba(246, 245, 240, 0.53) 33.55%, #F8F8F8 135.81%);',
      },
      backgroundColor: {
        'custom-color': '#f78a79',
        'card-bg': '#F78A79',
      },
      borderColor: {
        'custom-color': '#f78a79',
      },
      textColor: {
        'custom-color': '#f78a79',
      },
      color: {
        'custom-color': '#F78A79',
      },
      width: {
        '200p': '600px',
      },
      maxWidth: {
        '100': '40rem',
        '30%': '40%',
      },
      height: {
        home: '742px',
      },
      screens: {
        '90%': '90%',
      },
    },
  },
  plugins: [],
} satisfies Config;
