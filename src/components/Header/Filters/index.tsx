import Link from 'next/link';

import styles from './Filters.module.css';

export default function Filters() {
    return (
        <ul className={styles.filters}>
            <li>
                <Link className={styles.filters__item} href="/">
                    All
                </Link>
            </li>

            <li>
                <Link className={styles.filters__item} href="/filter/cats">
                    Cats
                </Link>
            </li>

            <li>
                <Link className={styles.filters__item} href="/filter/dogs">
                    Dogs
                </Link>
            </li>

            <li>
                <Link className={styles.filters__item} href="/filter/funny">
                    Funny
                </Link>
            </li>
        </ul>
    );
}
