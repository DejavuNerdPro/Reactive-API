import {from,Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
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
getAll:():Observable<any>=>from(prisma.projects.findMany({
    include:{teams:true}
})
.then((project)=>{
    console.log('All Data are retrieved.');
    return project;
})
.catch(e=>{
    console.log('Error : ',e);
    process.exit(1);
})
.finally(()=>prisma.$disconnect())
)
,
getById:(id:number):Observable<any>=>from(prisma.projects.findUnique({
    where:{id},include:{teams:true}
})
.then((project)=>{
    console.log('Data are retrieved.');
    return project;
})
.catch(e=>{
    console.log('Error : ',e);
    process.exit(1);
})
),
update:(id:number,project:Project):Observable<any>=>from(prisma.projects.update({
    where:{id},
    data:{
        name:project.name,
        description:project.description,
        team_id:project.team_id,
        start_date:project.start_date,
        end_date:project.end_date
    },
    include:{teams:true}
})
.then((project)=>{
    console.log('Data are updated.');
    return project;
})
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
