import fs from 'fs/promises';
import path from 'path';

const databasePath = path.resolve('./src/database.json');

async function getAll() {
    const jsonResult = await fs.readFile(databasePath, {encoding: "utf-8"});
    const data = JSON.parse(jsonResult);

    return data;
}

export const catsData = {
    getAll,
}