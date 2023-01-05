import FooterLinks from './FooterLinks';

import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <section className={styles.wrapper}>
                <div
                    role="textbox"
                    aria-label="Next Gallery 2023 current"
                    title="Next Gallery">
                    &copy; {new Date().getFullYear()} - Next Gallery by{' '}
                    <a
                        className={styles.author}
                        href="https://github.com/lucianosants"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Link to Github">
                        lucianosants
                    </a>
                </div>

                <FooterLinks />
            </section>
        </footer>
    );
}
