import { useRouter } from 'next/router';
import style from './PhotoPage.module.css';

interface PhotoPageProps {
    url: string;
    title: string;
}

export default function PhotoPage({ url, title }: PhotoPageProps) {
    const router = useRouter();
    return (
        <div className={style.photo}>
            <button
                type="button"
                className={style.photo__button}
                title="Back"
                onClick={() => router.back()}>
                Back
            </button>

            <h2 className={style.photo__title}>{title}</h2>

            <div className={style.photo__content}>
                <img
                    className={style.photo__image}
                    src={url}
                    alt={title}
                    title={title}
                />
            </div>
        </div>
    );
}
