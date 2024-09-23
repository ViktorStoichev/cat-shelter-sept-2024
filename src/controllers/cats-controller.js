import { Router } from "express";
import { catsService } from "../services/cats-service.js";
import multer from "multer";
import path from "path";

const router = Router();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './src/uploads'); // Directory to store uploaded files
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)); // Filename with timestamp
    },
  });
  
  // Initialize Multer with the storage configuration
const upload = multer({ storage: storage });

router.get('/cats/add-breed', (req, res) => {
    res.render('cats/addBreed');
});

router.get('/cats/add-cat', (req, res) => {
    res.render('cats/addCat');
});

router.post('/cats/add-cat', upload.single('file'), async (req, res) => {
    const catData = req.body;
    const file = req.file

    await catsService.add(catData, file);

    res.redirect('/');
});

router.get('/cats/edit-cat/:id', async (req, res) => {
    const id = req.params.id;
    const cat = await catsService.getOne(id);

    res.render('cats/editCat', { cat });
});

router.get('/cats/cat-shelter/:id', async (req, res) => {
    const id = req.params.id;
    const cat = await catsService.getOne(id);
    
    res.render('cats/catShelter', { cat });
});

export const catsController = router;