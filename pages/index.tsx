import Head from 'next/head';
import useSWR from 'swr';

import HomePage from '@src/screens/HomePage';
import { fetcher } from '@src/utils/fetcher';

const Home = () => {
    const { data } = useSWR('/api/photos', fetcher);

    return (
        <>
            <Head>
                <title>Next Gallery</title>
            </Head>
            <HomePage photos={data} />
        </>
    );
};

export default Home;
