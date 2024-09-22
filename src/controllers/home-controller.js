import { Router } from "express";
import { catsService } from "../services/cats-service.js";

const router = Router();

router.get('/', async (req, res) => {
    const data = await catsService.getAll()
    console.log(data);
    
    res.render('home');
});

export const homeController = router;