import Container from '@src/components/Container';
import Image from '@src/components/Image';

import { PhotosData } from '@src/types/photos';

export interface PhotoProps {
    photos: PhotosData[];
}

export default function HomePage({ photos }: PhotoProps) {
    return (
        <Container>
            {photos?.map((photo, i) => {
                return (
                    <Image
                        key={photo.id}
                        src={photo.properties.image.url}
                        alt={photo.properties.title.title[0].plain_text}
                        link={photo.id}
                    />
                );
            })}
        </Container>
    );
}
