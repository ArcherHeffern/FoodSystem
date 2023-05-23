import NonprofitSchema from "../models/Nonprofit";
import { Request, Response } from 'express';
import Nonprofit from "../interfaces/Nonprofit";

async function getAllFoodBanks(_: Request, res: Response) {
    let foodBanks: Nonprofit[];
    try {
        foodBanks = await NonprofitSchema.find({}).exec();
        console.log(foodBanks);
    } catch (e) {
        res.status(200).send(e);
        return;
    }
    res.status(200).send(foodBanks);
}

export default getAllFoodBanks;