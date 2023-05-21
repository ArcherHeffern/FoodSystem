import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';
import morgan from 'morgan';
import cors from 'cors';
import dbConnect from './dbconnect';

dotenv.config();

const app = express();
dbConnect();
const PORT = 8080;

// Middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routes
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`)
})