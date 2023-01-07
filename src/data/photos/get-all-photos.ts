import { PhotosData } from '@src/types/photos';
import { fetchJson } from '@src/utils/fetch-json';

export const getAllPhotos = async (url: string): Promise<PhotosData[]> => {
    const data = await fetchJson<PhotosData[]>(url);
    return data;
};
