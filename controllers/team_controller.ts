import {Request,Response,NextFunction} from 'express';
import {teamModel} from '../services/team';

export const TeamController={
    create:(req:Request,res:Response,next:NextFunction)=>{
        teamModel.create(req.body).subscribe({
            error:(e)=>next(e),
            next:(team)=>res.status(200).json(team)
        })
    },
    getAll:(req:Request,res:Response,next:NextFunction)=>{
        teamModel.getAll().subscribe({
            error:(e)=>next(e),
            next:(team)=>res.status(200).json(team)
        })
    },
    getById:(req:Request,res:Response,next:NextFunction)=>{
        teamModel.getById(Number(req.params.id)).subscribe({
            error:(e)=>next(e),
            next:(team)=>res.status(200).json(team)
        })
    },
    update:(req:Request,res:Response,next:NextFunction)=>{
        teamModel.update(req.body).subscribe({
            error:(e)=>next(e),
            next:(team)=>res.status(200).json(team)
        })
    },
    delete:(req:Request,res:Response,next:NextFunction)=>{
        teamModel.delete(Number(req.params.id)).subscribe({
            error:(e)=>next(e),
            next:(team)=>res.status(200).json(team)
        })
    },
}