import { Client } from '@notionhq/client';
import { NOTION_API_KEY } from '@src/config/constants';

export const notion = new Client({
    auth: NOTION_API_KEY,
});
