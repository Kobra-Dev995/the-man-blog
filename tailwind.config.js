/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'font-color-primary': '#D57055',
        'font-color-shadow': '#47181E',
        'primary-white': '#F0D4A9',
        'primary-red': '#A33A44',
        'primary-orange': '#CF7B39',
        'primary-blue': '#1E3A46',
      }
    },
  },

  plugins: [
    require('daisyui'),
    require('rippleui'),
    // require('@sira-ui/tailwind')({
    //   prefix: 'sira-',
    // }),
  ],

  daisyui: {
    prefix: 'daisy-',
    themes: ['luxury', 'dark'],
  },
};
