import NonprofitSchema from "../models/Nonprofit";
import { Request, Response } from 'express';
import Nonprofit from "../interfaces/Nonprofit";

async function getAllFoodBanks(_: Request, res: Response) {
    let foodBanks: Nonprofit[];
    try {
    // foodBanks = await Nonprofit.find({});
    foodBanks = [
        {
            name: 'foodbank',
            profileUrl: '',
            logoUrl: '',
            lat_long: '0,0',
            servings: 5,
            days_open: {
                monday: true,
                tuesday: true,
                wednesday: true,
                thursday: false,
                friday: false,
                saturday: false,
                sunday: false,
            }
        }
    ]
    } catch (e) {
        res.status(200).send(e);
        return;
    }
    res.status(200).send(foodBanks);
}

export default getAllFoodBanks;