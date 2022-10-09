import { theme as baseTheme, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    background: {
      primary: '#19172C',
      dimmed: 'rgba(20, 21, 38, 0.5)',
    },
    text: {
      dimmed: baseTheme.colors.gray[400],
    },
  },
  fonts: {
    heading: `"Roboto", sans-serif`,
    body: `"Roboto", sans-serif`,
  },
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'background.primary',
        color: baseTheme.colors.white,
        fontSize: '14px',
        height: '100%',
        margin: 0,
        padding: '10px 5px 0 0',
      },
      '::-webkit-scrollbar': {
        width: '10px',
      },
      '::-webkit-scrollbar-thumb': {
        backgroundColor: baseTheme.colors.gray[700],
        borderRadius: '30px',
      },
      '#__next': {
        height: '100%',
      },
    },
  },
});

export default theme;
