import styles from './Container.module.css';

interface ContainerProps {
    children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
    return (
        <main className={styles.container}>
            <section className={styles.wrapper}>{children}</section>
        </main>
    );
}
