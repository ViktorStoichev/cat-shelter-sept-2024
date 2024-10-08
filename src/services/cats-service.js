import { catsData } from "../data/cats-data.js";
import uniqid from 'uniqid';

async function getAllCats(filter = {}) {
    let cats = await catsData.getAllCats();
    
    if (filter.breed) {
        cats = cats.filter(cat => cat.breed.toLowerCase().startsWith(filter.breed.toLowerCase()));
    }

    return cats;
}

async function getOneCat(id) {
    return await catsData.getOneCat(id);
}

async function addCat(cat, file) {
    cat.id = uniqid();
    cat.imageUrl = '/' + file.filename;

    return await catsData.addCat(cat);
}

async function editCat(updatedCat, file, id) {
    updatedCat.id = id;
    updatedCat.imageUrl = '/' + file.filename;

    return await catsData.editCat(updatedCat);
}

async function removeCat(id) {
    return await catsData.removeCat(id);
}

export const catsService = {
    getAllCats,
    getOneCat,
    addCat,
    editCat,
    removeCat
}