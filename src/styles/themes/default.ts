export const defaultTheme = {
  colors: {
    blue: '#345FF6',
    gunmetal: '#253347',
    'dark-eletric-blue': '#5E6E85',
    borders: '#D8E2E7',
    white: '#FFFFFF',

    'bg-gradient-1': '#D6E6FE',
    'bg-gradient-2': '#D6FCFE',
  },
  fonts: {
    principal: "'Inter', sans-serif",
  },
  typography: {
    fontWeights: {
      regular: 400,
      semibold: 600,
    },
    h: {
      fontSizes: {
        xl: '6.4rem',
        l: '4.8rem',
        m: '2.4rem',
        s: '2.0rem',
      },
      lineHeights: {
        xl: '7.04rem',
        l: '5.28rem',
        m: 'normal',
        s: 'normal',
      },
      'letter-spacings': {
        xl: '-0.32rem',
        l: '-0.24rem',
        m: '-0.12rem',
        s: '-0.1rem',
      },
    },
    b: {
      fontSizes: {
        m: '1.6rem',
        s: '1.4rem',
      },
      lineHeights: {
        m: '2.4rem',
        s: '2.1rem',
      },
    },
  },
} as const
