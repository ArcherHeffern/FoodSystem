import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';
import morgan from 'morgan';
import cors from 'cors';

dotenv.config();

const app = express();
const port = 8080;
const apiKey = process.env.apiKey;

app.use(cors())
app.use(morgan('tiny'))

app.use(routes);

app.get('/', (_, res) => {
    res.send("connected!").status(200);
})

app.get('/apikey', (req, res) => {
    res.send(apiKey).status(200);
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})