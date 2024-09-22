import { Router } from "express";
import { homeController } from "./controllers/home-controller.js";
import { catsController } from "./controllers/cats-controller.js";

const router = Router();

router.use(homeController);
router.use(catsController);

export const routes = router;