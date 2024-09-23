import { breedsData } from "../data/breeds-data.js";

async function getAllBreeds() {
    return await breedsData.getAllBreeds();
}

async function addBreed(breed) {
    return await breedsData.addBreed(breed);
}

export const breedsService = {
    getAllBreeds,
    addBreed
}