import Link from 'next/link';
import styles from './Image.module.css';

interface ImageProps {
    link: string;
    src: string;
    alt: string;
}

export default function Image({ link, src, alt }: ImageProps) {
    return (
        <Link href={`/photos/${link}`} className={styles.image} title={alt}>
            <img src={src} alt={alt} className={styles.content} />
        </Link>
    );
}
