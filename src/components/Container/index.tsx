interface ContainerProps {
    children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
    return (
        <main className="container__main">
            <section className=" container__wrapper">{children}</section>
        </main>
    );
}
