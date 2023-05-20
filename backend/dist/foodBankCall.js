"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFoodBankApi = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const getFoodBankApi = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let url = `https://www.givefood.org.uk/api/2/foodbanks/search/?lat_lng=${req.query.location}`;
        const response = yield (0, node_fetch_1.default)(url);
        const responseJson = yield response.json();
        console.log(responseJson);
        res.json(responseJson);
    }
    catch (_a) {
        (error) => {
            console.log("something went wrong with the food bank api call", error);
        };
    }
});
exports.getFoodBankApi = getFoodBankApi;
