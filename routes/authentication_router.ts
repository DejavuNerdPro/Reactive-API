import passport from "passport";
import express from 'express';
import { error } from "console";

const router=express.Router();

router.get('/google',passport.authenticate('google',{scope:['profile','email']}));
router.get('/google/callback',passport.authenticate('google',{failureRedirect:'/login'}),(req,res)=>{
    res.redirect('/profile');
})

router.get('/github',passport.authenticate('github',{scope:['user:email']}));
router.get('/github/callback',passport.authenticate('github',{failureRedirect:'/login'}),(req,res)=>{
    res.redirect('/profile');
})

router.get('/facebook',passport.authenticate('facebook',{scope:['email']}));
router.get('/facebook/callback',passport.authenticate('facebook',{failureRedirect:'/login'}),(req,res)=>{
    res.redirect('/profile');
})

router.get('/logout',(req,res)=>{
    req.logout((error)=>{
        if(error) return res.status(500).json({error:'Logout Failed.'});
        res.redirect('/');
    })
})

export default router;