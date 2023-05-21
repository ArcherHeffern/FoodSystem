import Nonprofit from '../interfaces/Nonprofit';
import NonprofitSchema from '../models/Nonprofit';
import { Request, Response } from 'express'

async function postFoodBank(req: Request, res: Response) {
    console.log(JSON.stringify(req.body));
    const nonprofit = new NonprofitSchema({
        name: req.body.name, 
        profileUrl: req.body.profileUrl,
        logoUrl: req.body.logoUrl,
        lat_long: req.body.lat_long,
        servings: req.body.servings,
        days_open: {
            monday: req.body.monday,
            tuesday: req.body.tuesday,
            wednesday: req.body.wednesday,
            thursday: req.body.thursday,
            friday: req.body.friday,
            saturday: req.body.saturday,
            sunday: req.body.sunday,
        }
    });
    let np;
    try {
    np = NonprofitSchema.create(nonprofit);
    } catch (e) {
        res.status(400).send(e)
        return;
    }
    res.status(201).send(np);
}
export default postFoodBank;