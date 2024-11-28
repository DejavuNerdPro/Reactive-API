import {from,Observable} from 'rxjs';
import {Request,Response,NextFunction} from 'express';
import prisma from '../prisma_exportor/prisma';
import Project from '../models/project';

export const projectModel={
    create:(project:Project):Observable<any>=>from(prisma.projects.create({
        data:{
            name:project.name,
            team_id:project.team_id,
            start_date:project.start_date,
            description:project.description,
            end_date:project.end_date
        }
    })
    .then(()=>console.log('Data is inserted.'))
    .catch(e=>{
        console.log('Error : ',e);
        process.exit(1);
    })
),
    getAll:null,
    getById:null,
    update:null,
    delete:null

}
