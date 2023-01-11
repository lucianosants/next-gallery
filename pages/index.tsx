import Head from 'next/head';
import { GetStaticProps } from 'next';

import { getAllPhotos } from '@src/data/getAllPhotos';

import HomePage from '@src/screens/HomePage';
import { PhotosData } from '@src/types/photos';

interface HomeProps {
    data: PhotosData[];
}

const Home = ({ data }: HomeProps) => {
    return (
        <>
            <Head>
                <title>Next Gallery</title>
            </Head>
            <HomePage photos={data} />
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const data = await getAllPhotos();

    return {
        props: { data },
        revalidate: 10000,
    };
};

export default Home;
