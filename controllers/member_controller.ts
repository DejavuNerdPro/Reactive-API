import { Response,Request,NextFunction } from "express";
import { memberModel } from "../services/member";

export const MemberController={
    create:(req:Request,res:Response,next:NextFunction)=>{
        memberModel.create(req.body).subscribe({
            error:(e)=>next(e),
            next:(member)=>res.status(200).json(member)
        })
    },
    getAll:(req:Request,res:Response,next:NextFunction)=>{
        memberModel.getAll().subscribe({
            error:(e)=>next(e),
            next:(member)=>res.status(200).json(member)
        })
    },
    getById:(req:Request,res:Response,next:NextFunction)=>{
        memberModel.getById(Number(req.params.id)).subscribe({
            error:(e)=>next(e),
            next:(member)=>res.status(200).json(member)
        })
    },
    update:(req:Request,res:Response,next:NextFunction)=>{
        memberModel.update(Number(req.params.id),req.body).subscribe({
            error:(e)=>next(e),
            next:(member)=>res.status(200).json(member)
        })
    },
    delete:(req:Request,res:Response,next:NextFunction)=>{
        memberModel.delete(Number(req.params.id)).subscribe({
            error:(e)=>next(e),
            next:(member)=>res.status(200).json(member)
        })
    },
}