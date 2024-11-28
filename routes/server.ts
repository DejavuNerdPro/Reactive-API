import express,{Express,Request,Response} from 'express';
import dotenv from 'dotenv';
import { errorHandler } from '../utils/error_handling';
import TeamRouter from './team_router';
import MemberRouter from './member_router';
import ProjectRouter from './project_router';

dotenv.config();

const app:Express=express();

app.use(express.json());
/* app.use('/',(req:Request,res:Response)=>{
    console.log("confirmed / .");
    
    res.send("Visited / .");
}) */

app.use('/api/team',TeamRouter);
app.use('/api/member',MemberRouter);
app.use('/api/project',ProjectRouter);
app.use(errorHandler);


const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>
    console.log(`Express Server is running on http:\\\\localhost:${PORT}`)
);