import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { getAllPhotos } from '@src/data/photos/get-all-photos';
import { PhotosData } from '@src/types/photos';

import HomePage from '@src/screens/HomePage';

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

export const getServerSideProps: GetServerSideProps = async () => {
    const url = 'http://localhost:3000/api/photos';
    const data = await getAllPhotos(url);

    return {
        props: { data },
    };
};

export default Home;
