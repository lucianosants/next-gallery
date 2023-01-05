interface LinkProps {
    address: string;
    children: JSX.Element;
    sr_only: string;
}

import styles from '../../Footer.module.css';

export default function Link({ address, children, sr_only }: LinkProps) {
    return (
        <li className={styles.item}>
            <a
                aria-label={`Link to ${sr_only}`}
                title={`Link to ${sr_only}`}
                target="_blank"
                rel="noreferrer"
                href={address}>
                {children}
            </a>
        </li>
    );
}
