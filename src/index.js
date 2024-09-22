import express from 'express';
import handlebars from 'express-handlebars';

const app = express();
const port = 5000;

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

app.use(express.static('content'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/cats/add-breed', (req, res) => {
    res.render('cats/addBreed');
});

app.get('/cats/add-cat', (req, res) => {
    res.render('cats/addCat');
});

app.get('/cats/edit-cat', (req, res) => {
    res.render('cats/editCat');
});

app.get('/cats/cat-shelter', (req, res) => {
    res.render('cats/catShelter');
});

app.listen(port, () => console.log(`Server is listening on http://localhost:${port}...`));