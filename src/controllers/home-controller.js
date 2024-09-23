import { Router } from "express";
import { catsService } from "../services/cats-service.js";

const router = Router();

router.get('/', async (req, res) => {
    const cats = await catsService.getAll()
    
    res.render('home', { cats });
});

export const homeController = router;