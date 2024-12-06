import {Response,Request,NextFunction} from 'express';
import {UserModel} from '../services/user';

export const UserController={
    getById:(req:Request,res:Response,next:NextFunction)=>{
        UserModel.getById(Number(req.params.id)).subscribe({
            error:(e)=>next(e),
            next:(user)=>res.status(200).json(200)
        })
    },
    findAndCreate:(req:Request,res:Response,next:NextFunction)=>{
        UserModel.findAndCreate(req.body).subscribe({
            error:(e)=>next(e),
            next:(user)=>res.status(200).json(user)
        })
    }
}