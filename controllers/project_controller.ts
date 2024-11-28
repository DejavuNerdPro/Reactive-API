import { Response,Request,NextFunction } from "express";
import { projectModel } from "../services/project";

export const ProjectController={
    create:(req:Request,res:Response,next:NextFunction)=>{
        projectModel.create(req.body).subscribe({
            error:(e)=>next(e),
            next:(project)=>res.status(200).json(project)
        })
    }
}