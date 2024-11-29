import { Response,Request,NextFunction } from "express";
import { projectModel } from "../services/project";

export const ProjectController={
    create:(req:Request,res:Response,next:NextFunction)=>{
        projectModel.create(req.body).subscribe({
            error:(e)=>next(e),
            next:(project)=>res.status(200).json(project)
        })
    },
    getAll:(req:Request,res:Response,next:NextFunction)=>{
        projectModel.getAll().subscribe({
            error:(e)=>next(e),
            next:(project)=>res.status(200).json(project)
        })
    },
    getById:(req:Request,res:Response,next:NextFunction)=>{
        projectModel.getById(Number(req.params.id)).subscribe({
            error:(e)=>next(e),
            next:(project)=>res.status(200).json(project)
        })
    },
    update:(req:Request,res:Response,next:NextFunction)=>{
        projectModel.update(req.body).subscribe({
            error:(e)=>next(e),
            next:(project)=>res.status(200).json(project)
        })
    },
    delete:(req:Request,res:Response,next:NextFunction)=>{
        projectModel.delete(Number(req.params.id)).subscribe({
            error:(e)=>next(e),
            next:(project)=>res.status(200).json(project)
        })
    },
}