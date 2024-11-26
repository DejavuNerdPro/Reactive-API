import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app=express();

app.use(express.json());

const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>
    console.log(`Express Server is running on http:\\localhost:${PORT}`)
);