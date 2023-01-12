export type PhotoId = string;

export type PhotoImage = {
    url: string;
};

export type PhotoTag = {
    select: {
        name: string;
    };
};

export type PhotoTitle = {
    title: [
        {
            plain_text: string;
        }
    ];
};

export type PhotoProperties = {
    image: PhotoImage;
    tag: PhotoTag;
    title: PhotoTitle;
};

export type PhotosData = {
    id: PhotoId;
    properties: PhotoProperties;
};
