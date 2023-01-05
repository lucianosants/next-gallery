import { SlidersHorizontal } from 'phosphor-react';

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

                    <button
                        className={styles['btn--filter']}
                        type="button"
                        title="Filter by items"
                        onClick={() => console.log('filtered')}>
                        <SlidersHorizontal size={24} weight="fill" />
                        Filter
                    </button>
                </div>
            </nav>
        </header>
    );
}
