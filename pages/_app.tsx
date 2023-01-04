import '../src/styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@src/components/Header';
import Footer from '@src/components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
