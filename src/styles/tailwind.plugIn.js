/* eslint-disable */

const plugin = require('tailwindcss/plugin');

const tailwindCustomPlugIn = plugin(function ({ addUtilities, addComponents }) {
  const scrollbarHide = {
    /* IE and Edge */
    '-ms-overflow-style': 'none',

    /* Firefox */
    'scrollbar-width': 'none',

    /* Safari and Chrome */
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  };
  const scrollbarDefault = {
    '.scrollbar-default': {
      '.scrollbar-hide': {
        /* IE and Edge */
        '-ms-overflow-style': 'auto',

        /* Firefox */
        'scrollbar-width': 'auto',

        /* Safari and Chrome */
        '&::-webkit-scrollbar': {
          display: 'block',
        },
      },
    },
  };

  const spinner = {
    '@keyframes spin': {
      to: {
        transform: 'rotate(360deg)',
      },
    },
    '.spinner': {
      border: '4px solid #f3f3f3',
      borderTopColor: '#3498db',
      borderRadius: '50%',
      animation: 'spin 0.8s linear infinite',
    },
  };

  const typography = {
    '.main-title-extra-bold-24': {
      fontWeight: '800',
      fontSize: '2.4rem',
      fontFamily: 'NanumSquare_ac',
    },
    '.main-title-extra-bold-22': {
      fontWeight: '800',
      fontSize: '2.2rem',
      fontFamily: 'NanumSquare_ac',
    },
    '.main-title-extra-bold-20': {
      fontWeight: '800',
      fontSize: '2rem',
      fontFamily: 'NanumSquare_ac',
    },
    '.subtitle-extra-bold-18': {
      fontWeight: '800',
      fontSize: '1.8rem',
      fontFamily: 'NanumSquare_ac',
    },
    '.subtitle-extra-bold-16': {
      fontWeight: '800',
      fontSize: '1.8rem',
      fontFamily: 'NanumSquare_ac',
    },
    '.subtitle-extra-bold-13': {
      fontWeight: '800',
      fontSize: '1.3rem',
      fontFamily: 'NanumSquare_ac',
    },
    '.body-extrabold-16': { fontWeight: '800', fontSize: '1.6rem', fontFamily: 'NanumSquare_ac' },
    '.subtitle-bold-18': { fontWeight: '700', fontSize: '1.8rem', fontFamily: 'NanumSquare_ac' },
    '.subtitle-regular-15': { fontWeight: '400', fontSize: '1.5rem', fontFamily: 'NanumSquare_ac' },
    '.body-bold-18': { fontWeight: '700', fontSize: '1.8rem', fontFamily: 'NanumSquare_ac' },
    '.body-bold-16': { fontWeight: '700', fontSize: '1.6rem', fontFamily: 'NanumSquare_ac' },
    '.body-regular-16': { fontWeight: '400', fontSize: '1.6rem', fontFamily: 'NanumSquare_ac' },
    '.body-regular-14': { fontWeight: '400', fontSize: '1.4rem', fontFamily: 'NanumSquare_ac' },
    '.caption-regular-12': { fontWeight: '400', fontSize: '1.2rem', fontFamily: 'NanumSquare_ac' },
    '.label-bold-14': { fontWeight: '700', fontSize: '1.4rem', fontFamily: 'NanumSquare_ac' },
    '.button-extra-bold-16': {
      fontWeight: '800',
      fontSize: '1.6rem',
      fontFamily: 'NanumSquare_ac',
    },
    '.ch-main-title-bold-28': {
      fontWeight: '700',
      fontSize: '2.8rem',
      fontFamily: 'Montserrat',
    },
    '.ch-main-title-bold-24': {
      fontWeight: '700',
      fontSize: '2.4rem',
      fontFamily: 'Montserrat',
    },
    '.ch-main-title-bold-20': {
      fontWeight: '700',
      fontSize: '2rem',
      fontFamily: 'Montserrat',
    },
    '.ch-main-title-bold-18': {
      fontWeight: '700',
      fontSize: '1.8rem',
      fontFamily: 'Montserrat',
    },
    '.ch-main-title-medium-16': {
      fontWeight: '500',
      fontSize: '1.6rem',
      fontFamily: 'Montserrat',
    },
  };

  addUtilities([scrollbarHide, scrollbarDefault, typography]);

  addComponents([spinner]);
});

module.exports = tailwindCustomPlugIn;
