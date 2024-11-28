"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const error_handling_1 = require("../utils/error_handling");
const team_router_1 = __importDefault(require("./team_router"));
const member_router_1 = __importDefault(require("./member_router"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
/* app.use('/',(req:Request,res:Response)=>{
    console.log("confirmed / .");
    
    res.send("Visited / .");
}) */
app.use('/api/team', team_router_1.default);
app.use('/api/member', member_router_1.default);
app.use(error_handling_1.errorHandler);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express Server is running on http:\\\\localhost:${PORT}`));
