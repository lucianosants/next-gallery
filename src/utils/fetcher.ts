export const fetcher = (url: string) =>
    fetch(url)
        .then((res) => res.json())
        .then((data) => data.results.map((photos: any) => photos));
