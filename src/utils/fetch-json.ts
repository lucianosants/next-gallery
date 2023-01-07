import { PhotosData } from '@src/types/photos';

export const fetchJson = async <T>(url: string): Promise<T> => {
    const raw = await fetch(url);
    const data = await raw.json();
    const photos = await data.results.map((photos: PhotosData) => photos);
    return photos;
};
