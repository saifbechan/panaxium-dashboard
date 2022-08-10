import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';

import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
