/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
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
    themes: false,
  },

};
