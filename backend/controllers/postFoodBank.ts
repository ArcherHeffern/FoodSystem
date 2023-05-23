import NonprofitSchema from '../models/Nonprofit';
import { Request, Response } from 'express'

async function postFoodBank(req: Request, res: Response) {
    console.log(JSON.stringify(req.body));
    const formData = req.body.data;
    const nonprofit = new NonprofitSchema({
        name: formData.name, 
        profileUrl: formData.profileUrl,
        logoUrl: formData.logoUrl,
        lat_long: formData.lat_long,
        servings: formData.servings,
        days_open: {
            monday: formData.monday,
            tuesday: formData.tuesday,
            wednesday: formData.wednesday,
            thursday: formData.thursday,
            friday: formData.friday,
            saturday: formData.saturday,
            sunday: formData.sunday,
        }
    });
    console.log(JSON.stringify(nonprofit));
    let np;
    try {
    np = await NonprofitSchema.create(nonprofit);
    } catch (e) {
        res.status(400).send(e)
        return;
    }
    res.status(201).send(np);
}
export default postFoodBank;