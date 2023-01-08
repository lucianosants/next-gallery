import useSWR from 'swr';

import { fetcher } from '@src/utils/fetcher';

export const useGetAllPhotos = () => {
    const url = '/api/photos';
    const { data, error } = useSWR(url, fetcher);
    return { data, error };
};
