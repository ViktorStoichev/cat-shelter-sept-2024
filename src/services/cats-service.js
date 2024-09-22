import { catsData } from "../data/cats-data.js";

async function getAll() {
    return await catsData.getAll();
}

export const catsService = {
    getAll,
}