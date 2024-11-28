import { Response,Request,NextFunction } from "express";
import { memberModel } from "../services/member";

export const MemberController={
    create:(req:Request,res:Response,next:NextFunction)=>{
        memberModel.create(req.body).subscribe({
            error:(e)=>next(e),
            next:(member)=>res.status(200).json(member)
        })
    }
}