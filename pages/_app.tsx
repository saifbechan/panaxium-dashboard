import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';

import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import Layout from '../components/Layout';
import theme from '../styles/theme';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          name="viewport"
        />
        <link href="/manifest.json" rel="manifest" />
      </Head>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
