import session from 'express-session';

export const seesionConfig=session({
    secret : process.env.SESSION_SECRET_KEY || '_____**____',
    resave:false,
    saveUninitialized:false,
    cookie:{
        httpOnly:true,
        maxAge:1000*60*60,
    },

});