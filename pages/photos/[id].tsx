import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

import PhotoPage from '@src/screens/PhotoPage';

import { getPhoto } from '@src/data/getPhoto';
import { PhotosData } from '@src/types/photos';
import { getAllPhotos } from '@src/data/getAllPhotos';

export interface DynamicPhotoProps {
    photo: PhotosData;
}

export interface IParams extends ParsedUrlQuery {
    id: string;
}

export default function Photos({ photo }: DynamicPhotoProps) {
    const title = photo?.properties.title.title[0].plain_text;
    return (
        <>
            <Head>
                <title>Next Gallery / {title}</title>
            </Head>

            <PhotoPage title={title} url={photo?.properties.image.url} />
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const photos = await getAllPhotos();

    const maps = photos.map((photo: any) => {
        return {
            params: {
                id: photo.id,
            },
        };
    });

    return {
        paths: maps,

        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { id } = ctx.params as IParams;
    const data = await getPhoto(id);

    return {
        props: { photo: data },
    };
};
