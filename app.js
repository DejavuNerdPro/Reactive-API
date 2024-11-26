import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app=express();

app.use(express.json());
app.use('/',(req,res)=>{
    console.log("confirmed / .");
    res.send("Visited / .");
})

const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>
    console.log(`Express Server is running on http:\\localhost:${PORT}`)
);