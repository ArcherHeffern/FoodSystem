import fetch from 'node-fetch';
import {Response, Request} from 'express';

export const getFoodBankApi= async(req: Request, res: Response) => {
    try {
        let url = `https://www.givefood.org.uk/api/2/foodbanks/search/?lat_lng=${req.query.location}`;
        const response = await fetch(url)
        const responseJson = await response.json();
        console.log(responseJson);
        res.json(responseJson);
    } catch {(error: Error) => {
        console.log("something went wrong with the food bank api call", error);
    }}
}
