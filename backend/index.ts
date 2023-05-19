const express = require('express');
const app = express();
const dotenv = require('dotenv');
const port = 8080;
dotenv.config();
const apiKey = process.env.apiKey;

app.get('/apikey', (req, res) => {
    res.send(apiKey).status(200);
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})