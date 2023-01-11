import { fetcher } from '@src/utils/fetcher';

export const getAllPhotos = async () => {
    const url =
        'https://next-gallery-server.netlify.app/.netlify/functions/api';
    const data = await fetcher(url);

    return data;
};
