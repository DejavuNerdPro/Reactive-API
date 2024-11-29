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
getAll:():Observable<any>=>from(prisma.projects.findMany()
.then(()=>console.log('All Data are retrieved.'))
.catch(e=>{
    console.log('Error : ',e);
    process.exit(1);
})
),
getById:(id:number):Observable<any>=>from(prisma.projects.findUnique({
    where:{id}
})
.then(()=>console.log('Data are retrieved.'))
.catch(e=>{
    console.log('Error : ',e);
    process.exit(1);
})
),
update:(project:Project):Observable<any>=>from(prisma.projects.update({
    where:{id:project.id},
    data:{
        name:project.name,
        description:project.description,
        team_id:project.team_id,
        start_date:project.start_date,
        end_date:project.end_date
    }
})
.then(()=>console.log('Data are updated.'))
.catch(e=>{
    console.log('Error : ',e);
    process.exit(1);
})
),
delete:(id:number):Observable<any>=>from(prisma.projects.delete({
    where:{id}
})
.then(()=>console.log('Data are deleted.'))
.catch(e=>{
    console.log('Error : ',e);
    process.exit(1);
})
)

}
