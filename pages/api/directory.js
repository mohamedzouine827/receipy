// pages/api/directory.js

import { readdir } from 'fs/promises';
import { join } from 'path';
import { createHandler } from 'micro';

const handler = createHandler(async (req, res) => {
    try {
        const { query: { char } } = req;
        const directoryPath = join('recipes', 'index', char);
        const files = await readdir(directoryPath);
        res.json({ files });
    } catch (error) {
        console.error("Error reading directory:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default handler;
