import useSWR from 'swr';

import { fetcher } from '@src/utils/fetcher';

export const useGetFilteredPhotos = (query: string) => {
    const url = `/api/photos/filter?q=${query}`;

    const { data, error } = useSWR(url, fetcher);

    return { data, error };
};
