import { getFoodBankApi } from "./foodBankCall";
import {Express} from 'express';


function routes(app: Express) {
    app.get("/api/food-banks/search", getFoodBankApi)
}

export default routes;