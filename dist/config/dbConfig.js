"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.query$ = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
const rxjs_1 = require("rxjs");
dotenv_1.default.config(); //load local environmental variables on .env file.
const pool = new pg_1.Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME
});
//for custom query statement
const query$ = (text, params) => new rxjs_1.Observable((subscriber) => {
    pool.query(text, params, (err, res) => {
        if (err) {
            subscriber.error(err);
        }
        else {
            subscriber.next(res.rows);
            console.log('ROWS : ', res.rows);
            subscriber.complete();
        }
    });
});
exports.query$ = query$;
pool.on('connect', () => {
    console.log("Postgre SQL Server Connected.");
});
