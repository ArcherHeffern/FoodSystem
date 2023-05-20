import getFoodBankApi from "./controllers/foodBankCall";
import postFoodBank from './controllers/postFoodBank';
import express from 'express';
const router = express.Router();

router.get('/api/food-banks/search', getFoodBankApi)

router.post('/api/food-bank', postFoodBank)

export default router;