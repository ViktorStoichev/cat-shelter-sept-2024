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

async function getAllCats() {
    const database = await getDatabase();
    const cats = database.cats;

    return cats;
}

async function getOneCat(id) {
    const cats = await getAllCats();
    const catById = cats.find(cat => cat.id === id);

    return catById;
}

async function addCat(cat) {    
    const database = await getDatabase();

    database.cats.push(cat);

    return saveDatabase(database);
}

export const catsData = {
    getAllCats,
    getOneCat,
    addCat,
}