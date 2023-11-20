import '../styles/globals.css';
import type { AppProps } from 'next/dist/next-server/lib/utils/app';

function MyApp({ Component, pageProps }: AppProps) {  return (
    <Component {...pageProps } />
  );
}

export default MyApp;