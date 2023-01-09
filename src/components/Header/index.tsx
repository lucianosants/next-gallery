import Link from 'next/link';
import { SlidersHorizontal } from 'phosphor-react';
import Filters from './Filters';

import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.wrapper}>
                <div
                    className={styles.brand}
                    aria-label="Next Gallery"
                    role="textbox"
                    tabIndex={0}>
                    <h2 className={styles.title}>Next</h2>

                    <img
                        className={styles.logo}
                        src="/assets/logo.svg"
                        alt="Logo from next Gallery"
                        tabIndex={0}
                    />
                </div>

                <div className={styles.menu} role="group" aria-label="menu">
                    <label className={styles.theme}>
                        <input
                            type="checkbox"
                            className={styles['btn--theme']}
                            title="choose your theme"
                            onChange={() => console.log('changed theme')}
                        />
                    </label>

                    <details className="cursor-pointer" title="Filter by items">
                        <summary className="flex gap-1">
                            <div className={styles['btn--filter']}>
                                <SlidersHorizontal size={24} weight="fill" />
                                Filter
                            </div>
                        </summary>
                        <Filters />
                    </details>
                </div>
            </nav>
        </header>
    );
}
