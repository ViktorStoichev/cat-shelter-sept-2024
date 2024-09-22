import { Router } from "express";

const router = Router();

router.get('/cats/add-breed', (req, res) => {
    res.render('cats/addBreed');
});

router.get('/cats/add-cat', (req, res) => {
    res.render('cats/addCat');
});

router.get('/cats/edit-cat', (req, res) => {
    res.render('cats/editCat');
});

router.get('/cats/cat-shelter', (req, res) => {
    res.render('cats/catShelter');
});

export const catsController = router;