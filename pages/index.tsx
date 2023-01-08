import Head from 'next/head';

import { useGetAllPhotos } from '@src/hooks/useGetAllPhotos';

import HomePage from '@src/screens/HomePage';

const Home = () => {
    const { data: photos } = useGetAllPhotos();

    return (
        <>
            <Head>
                <title>Next Gallery</title>
            </Head>
            <HomePage photos={photos} />
        </>
    );
};

export default Home;
