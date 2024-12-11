import passport from "passport";
import '../config/Passport/facebookStrategy';
import '../config/Passport/githubStrategy';
import '../config/Passport/googleStrategy';
import prisma from "../../prisma_exportor/prisma";

passport.serializeUser((user:any,done)=>{
    done(null,user.id);
});

passport.deserializeUser(async(id:number,done)=>{
    try{
        const user=await prisma.user.findUnique({where:{id}});
        done(null,user);
    }catch(error){
        done(error);
    }
});

export default passport;