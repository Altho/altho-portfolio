import { AppProps } from 'next/app';
import '../styles/globals.css'
import Head from 'next/head';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useState } from 'react';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
    const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
      <>
        <Head>
          <title>Page title</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
          <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <Component {...pageProps} />
        </MantineProvider>
          </ColorSchemeProvider>
      </>
  );
}
