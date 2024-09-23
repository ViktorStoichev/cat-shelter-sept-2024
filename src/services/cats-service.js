import { catsData } from "../data/cats-data.js";
import uniqid from 'uniqid';

async function getAll() {
    return await catsData.getAll();
}

async function getOne(id) {
    return await catsData.getOne(id);
}

async function add(cat, file) {
    cat.id = uniqid();
    cat.imageUrl = '/' + file.filename;

    return await catsData.add(cat);
}

export const catsService = {
    getAll,
    getOne,
    add,
}