import express from 'express';
import {authenticate} from '../utils/authenticationMiddleware';

const router=express.Router();

router.get('/profile',authenticate,(req,res)=>{
    res.json(req.user);
});

export default router;