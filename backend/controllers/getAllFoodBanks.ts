import Nonprofit from "../models/Nonprofit";
import { Request, Response } from 'express';

async function getAllFoodBanks(_: Request, res: Response) {
    let foodBanks;
    try {
    foodBanks = await Nonprofit.find({});
    } catch (e) {
        res.status(200).send(e);
        return;
    }
    res.status(200).send(foodBanks);
}

export default getAllFoodBanks;