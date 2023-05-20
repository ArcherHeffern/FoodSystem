"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
const cors = require('cors');
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 8080;
const apiKey = process.env.apiKey;
app.use(cors());
(0, routes_1.default)(app);
app.get('/apikey', (req, res) => {
    res.send(apiKey).status(200);
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
