export const getPhoto = async (query: string) => {
    const url = `https://next-gallery-server.netlify.app/.netlify/functions/api/photos/${query}`;
    const data = fetch(url).then((res) => res.json());

    return data;
};
