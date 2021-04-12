const {guessProductionMode} = require("@ngneat/tailwind");

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
  prefix: '',
  // mode: 'jit',
  mode: '',
  purge: {
    // enabled: true,
    content: [
      './src/**/*.{html,ts,css,scss,sass,less,styl}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xs': {'max': '599px'},
        'sm': {'min': '600px', 'max': '959px'},
        'md': {'min': '960px', 'max': '1279px'},
        'lg': {'min': '1280px', 'max': '1919px'},
        'xl': {'min': '1920px', 'max': '5000px'},
        'lt-sm': {'max': '599px'},
        'lt-md': {'max': '959px'},
        'lt-lg': {'max': '1279px'},
        'lt-xl': {'max': '1919px'},
        'gt-xs': {'min': '600px'},
        'gt-sm': {'min': '960px'},
        'gt-md': {'min': '1280px'},
        'gt-lg': {'min': '1920px'},
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
