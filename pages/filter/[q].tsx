import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';

import { getFilteredPhotos } from '@src/data/getFilteredPhotos';

import HomePage from '@src/screens/HomePage';
import { PhotosData } from '@src/types/photos';
import { ParsedUrlQuery } from 'querystring';

interface FilterProps {
    data: PhotosData[];
}

interface Props extends ParsedUrlQuery {
    q: string;
    params: string;
}

export default function Filter({ data }: FilterProps) {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Next Gallery / {router.query.q}</title>
            </Head>
            <HomePage photos={data} />
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const queries = [{ q: 'cats' }, { q: 'dogs' }, { q: 'funny' }];

    return {
        paths: queries.map((param) => {
            return {
                params: {
                    q: param.q,
                },
            };
        }),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { q } = ctx.params as Props;
    const data = await getFilteredPhotos(q);

    return {
        props: {
            data,
        },
    };
};
