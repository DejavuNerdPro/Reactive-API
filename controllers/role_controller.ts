import { Response,Request,NextFunction } from "express";
import { roleModel } from "../services/role";

export const RoleController={
    create:(req:Request,res:Response,next:NextFunction)=>{
        roleModel.create(req.body).subscribe({
            error:(e)=>next(e),
            next:(role)=>res.status(200).json(role)
        })
    }
}