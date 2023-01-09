import Head from 'next/head';
import { useRouter } from 'next/router';
import { useGetFilteredPhotos } from '@src/hooks/useGetFilteredPhotos';

import HomePage from '@src/screens/HomePage';

export default function Filter() {
    const router = useRouter();
    const { data } = useGetFilteredPhotos(router.query.q as string);

    return (
        <>
            <Head>
                <title>Next Gallery / {router.query.q}</title>
            </Head>
            <HomePage photos={data} />
        </>
    );
}
