import express: any from 'express';
import dotenv: any from 'dotenv';
import routes: any from './routes';

dotenv.config();

const app = express();
const port = 8080;
const apiKey = process.env.apiKey;

app.use(cors())

routes(app);

app.get('/apikey', (req, res) => {
    res.send(apiKey).status(200);
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})