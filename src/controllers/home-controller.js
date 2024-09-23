import { Router } from "express";
import { catsService } from "../services/cats-service.js";

const router = Router();

router.get('/', async (req, res) => {
    const cats = await catsService.getAllCats()
    
    res.render('home', { layout: false, cats });
});

router.get('/search', async (req, res) => {
    const filter = req.query;
    const cats = await catsService.getAllCats(filter);

    res.render('home', { layout: false, cats, filter });
})

export const homeController = router;