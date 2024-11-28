"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const dbConfig_1 = require("../config/dbConfig");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/', (req, res) => {
    console.log("confirmed / .");
    const teams = (0, dbConfig_1.query$)('SELECT * FROM projects;', [])
        .subscribe({
        next: (t) => res.send(t),
        error: (err) => console.log(err)
    });
    console.log('Team : ', (0, dbConfig_1.query$)('SELECT * FROM team;', [])
        .subscribe({
        next: (t) => res.send(t),
        error: (err) => console.log(err)
    }));
    res.send("Visited / .");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express Server is running on http:\\\\localhost:${PORT}`));
