import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";;
import dotenv from 'dotenv';
import {UserModel} from '../../services/user';
import User from "../../models/user";

dotenv.config();

passport.use(new GoogleStrategy(
    {
        clientID:process.env.FACEBOOK_CLIENT_ID as string,
        clientSecret:process.env.FACEBOOK_CLIENT_SECRET as string,
        callbackURL:'/auth/facebook/callback'
    },
    async(accessToken,refreshToken,profile,done)=>{
        try{
            const user:User={
                oauth_id: profile.id,
                provider: "Facebook",
                id: 0,
                member_id: 0,
                role_id: 0,
                password: "******",
                createdAt: Date.now() as unknown as Date,
                updatedAt: Date.now() as unknown as Date,
            }
            UserModel.findAndCreate(user)
            done(null,user);
        }catch(error){
            done(error);
        }
    }
)
);


