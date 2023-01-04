import FooterLinks from './FooterLinks';

export default function Footer() {
    return (
        <footer className="footer">
            <section className="footer__wrapper">
                <div
                    role="textbox"
                    aria-label="Next Gallery 2023 current"
                    title="Next Gallery">
                    &copy; {new Date().getFullYear()} - Next Gallery by{' '}
                    <a
                        className="footer__author"
                        href="https://github.com/lucianosants"
                        aria-label="Link to Github">
                        lucianosants
                    </a>
                </div>

                <FooterLinks />
            </section>
        </footer>
    );
}
