import { fetcher } from '@src/utils/fetcher';

export const getFilteredPhotos = async (query: string) => {
    const url = `https://next-gallery-server.netlify.app/.netlify/functions/api/filter?q=${query}`;

    const data = await fetcher(url);

    return data;
};
