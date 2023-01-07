import { NextApiRequest, NextApiResponse } from 'next';

import { Client } from '@notionhq/client';

const notion = new Client({
    auth: process.env.NOTION_API_KEY,
});

export default async function getPhotos(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const DATABASE_ID = '3ec14f47e91446c5bf1a1b37cabe7b5b';

        const response = await notion.databases.query({
            database_id: DATABASE_ID,
        });

        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
}
