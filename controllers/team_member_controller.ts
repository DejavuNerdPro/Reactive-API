import { Response,Request,NextFunction } from "express";
import { teamMemberModel } from "../services/team_member";

export const TeamMemberController={
    create:(req:Request,res:Response,next:NextFunction)=>{
        teamMemberModel.create(req.body).subscribe({
            error:(e)=>next(e),
            next:(teamMember)=>res.status(200).json(teamMember)
        })
    }
}