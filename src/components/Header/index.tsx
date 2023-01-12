import { SlidersHorizontal } from 'phosphor-react';
import { useEffect, useState } from 'react';

import Filters from './Filters';

import styles from './Header.module.css';

export default function Header() {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const body = document.body as HTMLBodyElement;
        !isDark
            ? body.classList.add('light-theme')
            : body.classList.remove('light-theme');
    }, [isDark]);

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
                            onChange={() => setIsDark(!isDark)}
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
