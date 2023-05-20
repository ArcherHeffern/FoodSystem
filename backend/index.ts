import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

const app = express();
const port = 8080;

const apiKey = process.env.apiKey;

routes(app);

app.get('/apikey', (req, res) => {
    res.send(apiKey).status(200);
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})