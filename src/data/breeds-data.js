import fs from 'fs/promises';
import path from 'path';

const databasePath = path.resolve('./src/database.json');

async function getDatabase() {
    const jsonResult = await fs.readFile(databasePath, {encoding: "utf-8"});
    const data = JSON.parse(jsonResult);

    return data;
}

function saveDatabase(data) {
    return fs.writeFile(databasePath, JSON.stringify(data, {}, 2));
}

async function getAllBreeds() {
    const database = await getDatabase();
    const breeds = database.breeds;

    return breeds;
}

async function addBreed(breed) {
    const database = await getDatabase();

    database.breeds.push(breed);

    return saveDatabase(database);
}

export const breedsData = {
    getAllBreeds,
    addBreed
}