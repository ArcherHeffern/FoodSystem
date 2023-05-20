import fetch from 'node-fetch';
import {Response, Request} from 'express';
import Nonprofit from '../interfaces/Nonprofit';

const getFoodBankApi= async(req: Request, res: Response) => {
    if (!req.query?.location) {
        res.send("Bad Request\nRequest requires query string of lat_lng=lat,lng with no spaces").status(400);
        return;
    }
    try {
        let url = `https://www.givefood.org.uk/api/2/foodbanks/search/?lat_lng=${req.query.location}`;
        const response = await fetch(url)
        const responseJson = await response.json();
        const foodBanksList: Nonprofit[] = [];
        for (let foodBank of responseJson){
            const foodBankInstance = {
                name: foodBank?.name ? foodBank.name : null,
                profileUrl: foodBank?.urls?.homepage ? foodBank.urls.homepage : null,
                logoUrl: null,
                lat_long: foodBank?.lat_lng ? foodBank.lat_lng : null,
                servings: null,
                days_open: null,
            };
            foodBanksList.push(foodBankInstance);
        }
        console.log(foodBanksList);
        res.json(foodBanksList);
    } catch {(error: Error) => {
        console.log("something went wrong with the food bank api call", error);
    }}
}

export default getFoodBankApi;