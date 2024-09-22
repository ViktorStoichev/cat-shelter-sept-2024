import express from 'express';

const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('It  works!');
});

app.listen(port, () => console.log(`Server is listening on http://localhost:${port}...`));