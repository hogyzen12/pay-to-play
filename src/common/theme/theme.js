// eslint-disable-next-line import/named
import { createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
  palette: {
    primary: {
      main: '#141414',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#512DA8',
      contrastText: '#FFF',
    },
    success: {
      main: '#404040',
      contrastText: '#A2A2A2',
    },
    info: {
      main: '#1D1D1D',
      contrastText: '#FFF',
    },
    custom: {
      white: '#FFF',
      black: '#000',
      apple: '#4AAF47',
      thunder: '#221F20',
    },
    background: {
      default: '#141414',
    },
    text: {
      primary: '#FFF',
      secondary: '#909090',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 16,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    h2: {
      fontFamily: "'Stick No Bills'",
      fontSize: '48px',
      fontWeight: 600,
      background: 'linear-gradient(90deg, #FBC7D4 0%, #9796F0 100%), #4AAF47',
      backgroundClip: 'text',
      textFillColor: 'transparent',
      textTransform: 'uppercase',
    },
    h3: {
      fontFamily: "'Bebas Neue'",
      fontSize: '18px',
      fontWeight: 400,
      textTransform: 'none',
      color: '#A1A1A1',
    },
    h4: {
      fontSize: '16px',
      fontWeight: 500,
    },
    body1: {
      fontSize: '16px',
      lineHeight: '25.6px',
    },
    body2: {
      fontSize: '14px',
      lineHeight: '14px',
    },
    button: {
      fontSize: '14px',
      lineHeight: '14px',

      '@media (min-width: 768px)': {
        fontSize: '16px',
        lineHeight: '16px',
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1464,
      // xl: 1200,
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: 'fit-content',

          '@media (min-width: 768px)': {
            minHeight: 'fit-content',
          },
        },
        gutters: {
          paddingLeft: 16,
          paddingRight: 16,

          '@media (min-width: 600px)': {
            paddingLeft: 48,
            paddingRight: 48,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          margin: 0,
          padding: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          borderRadius: 0,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 0,
          '&:last-child': {
            paddingBottom: 0,
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
