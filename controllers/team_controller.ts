import {Request,Response,NextFunction} from 'express';
import {teamModel} from '../services/team';

export const TeamController={
    create:(req:Request,res:Response,next:NextFunction)=>{
        teamModel.create(req.body).subscribe({
            error:(e)=>next(e),
            next:(team)=>res.status(200).json(team)
        })
    }
}