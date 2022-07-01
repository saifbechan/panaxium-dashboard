import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

const eee = 555;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
