"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const foodBankCall_1 = require("./foodBankCall");
function routes(app) {
    app.get("/api/food-banks/search", foodBankCall_1.getFoodBankApi);
}
exports.default = routes;
