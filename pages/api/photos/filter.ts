import { NextApiRequest, NextApiResponse } from 'next';

import { DATABASE_ID } from '@src/config/constants';
import { notion } from '@src/utils/notion-client';

export default async function getPhotosByFilter(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const q = req.query.q;

        const response = await notion.databases.query({
            database_id: DATABASE_ID,
            filter: {
                property: 'tag',
                select: {
                    equals: String(q),
                },
            },
        });

        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
}
