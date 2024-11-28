import express,{Express,Request,Response} from 'express';
import dotenv from 'dotenv';
import {query$} from '../config/dbConfig';
import {map} from 'rxjs/operators';
import { error } from 'console';

dotenv.config();

const app:Express=express();

app.use(express.json());
app.use('/',(req:Request,res:Response)=>{
    console.log("confirmed / .");
    const teams=query$('SELECT * FROM projects;',[])
    .subscribe(
        {
        next:(t)=>res.send(t),
        error:(err)=>console.log(err)
        }
    );
    
    console.log('Team : ',query$('SELECT * FROM team;',[])
    .subscribe(
        {
        next:(t)=>res.send(t),
        error:(err)=>console.log(err)
        }
    ));
    res.send("Visited / .");
})

const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>
    console.log(`Express Server is running on http:\\\\localhost:${PORT}`)
);