import getFoodBankApi from "./controllers/foodBankCall";
import postFoodBank from './controllers/postFoodBank';
import getAllFoodBanks from './controllers/getAllFoodBanks';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const router = express.Router();

const apiKey = process.env.apiKey || 'error';

router.get('/', (_, res) => {
    res.send("connected!").status(200);
})

router.get('/apikey', (req, res) => {
    res.send(apiKey).status(200);
})

router.get('/api/food-banks/search', getFoodBankApi);

router.post('/api/food-bank', postFoodBank);

router.get('/api/food-bank', getAllFoodBanks);

export default router;