import Container from '@src/components/Container';
import Image from '@src/components/Image';

import { PhotosData } from '@src/types/photos';

export interface PhotoProps {
    photos: PhotosData[];
}

export default function HomePage({ photos }: PhotoProps) {
    return (
        <Container>
            {photos.map((photo, i) => {
                const url = photo.properties.image.files[0].file.url;

                return (
                    <Image
                        key={photo.id}
                        src={url}
                        alt={photo.properties.title.title[0].plain_text}
                        link={url}
                    />
                );
            })}
        </Container>
    );
}
