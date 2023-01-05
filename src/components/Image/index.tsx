import styles from './Image.module.css';

interface ImageProps {
    link: string;
    src: string;
    alt: string;
}

export default function Image({ link, src, alt }: ImageProps) {
    return (
        <a href={link} className={styles.image}>
            <img src={src} alt={alt} className={styles.content} />
        </a>
    );
}
