import { Response,Request,NextFunction } from "express";
import { roleModel } from "../services/role";

export const RoleController={
    create:(req:Request,res:Response,next:NextFunction)=>{
        roleModel.create(req.body).subscribe({
            error:(e)=>next(e),
            next:(role)=>res.status(200).json(role)
        })
    },
    getAll:(req:Request,res:Response,next:NextFunction)=>{
        roleModel.getAll().subscribe({
            error:(e)=>next(e),
            next:(role)=>res.status(200).json(role)
        })
    },
    getById:(req:Request,res:Response,next:NextFunction)=>{
        roleModel.getById(Number(req.params.id)).subscribe({
            error:(e)=>next(e),
            next:(role)=>res.status(200).json(role)
        })
    },
    update:(req:Request,res:Response,next:NextFunction)=>{
        roleModel.update(Number(req.params.id),req.body).subscribe({
            error:(e)=>next(e),
            next:(role)=>res.status(200).json(role)
        })
    },
    delete:(req:Request,res:Response,next:NextFunction)=>{
        roleModel.delete(Number(req.params.id)).subscribe({
            error:(e)=>next(e),
            next:(role)=>res.status(200).json(role)
        })
    },
}