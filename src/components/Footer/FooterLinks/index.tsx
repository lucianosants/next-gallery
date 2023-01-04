import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react';
import Link from './Link';

export default function FooterLinks() {
    const links = [
        {
            icon: <LinkedinLogo size={24} weight="fill" />,
            link: 'https://linkedin.com/in/lucianosants',
            sr_only: 'Linkedin',
        },
        {
            icon: <GithubLogo size={24} weight="fill" />,
            link: 'https://github.com/lucianosants',
            sr_only: 'Github',
        },
        {
            icon: <InstagramLogo size={24} weight="fill" />,
            link: 'https://instagram.com/lucianosants.dev',
            sr_only: 'Instagram',
        },
    ];

    return (
        <ul className="footer__links">
            {links.map((link, i) => {
                return (
                    <Link key={i} address={link.link} sr_only={link.sr_only}>
                        {link.icon}
                    </Link>
                );
            })}
        </ul>
    );
}
