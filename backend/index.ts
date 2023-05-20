import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 8080;

const apiKey = process.env.apiKey;

app.get('/apikey', (req, res) => {
    res.send(apiKey).status(200);
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})