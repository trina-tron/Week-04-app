import '../styles/bootstrap.min.css';
import Head from 'next/head';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial=scale=1"/>
      </Head>
   <Component {...pageProps} />
    </>   
 );   
}


