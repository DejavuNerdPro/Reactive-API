import { Response,Request,NextFunction } from "express";
import { teamMemberModel } from "../services/team_member";

export const TeamMemberController={
    create:(req:Request,res:Response,next:NextFunction)=>{
        teamMemberModel.create(req.body).subscribe({
            error:(e)=>next(e),
            next:(teamMember)=>res.status(200).json(teamMember)
        })
    },
    getAll:(req:Request,res:Response,next:NextFunction)=>{
        teamMemberModel.getAll().subscribe({
            error:(e)=>next(e),
            next:(teamMember)=>res.status(200).json(teamMember)
        })
    },
    getById:(req:Request,res:Response,next:NextFunction)=>{
        teamMemberModel.getById(Number(req.params.id)).subscribe({
            error:(e)=>next(e),
            next:(teamMember)=>res.status(200).json(teamMember)
        })
    },
    update:(req:Request,res:Response,next:NextFunction)=>{
        teamMemberModel.update(req.body).subscribe({
            error:(e)=>next(e),
            next:(teamMember)=>res.status(200).json(teamMember)
        })
    },
    delete:(req:Request,res:Response,next:NextFunction)=>{
        teamMemberModel.delete(Number(req.params.id)).subscribe({
            error:(e)=>next(e),
            next:(teamMember)=>res.status(200).json(teamMember)
        })
    },
}