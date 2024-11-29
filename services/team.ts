import {from,Observable} from 'rxjs';
import {Request,Response,NextFunction} from 'express';
import prisma from '../prisma_exportor/prisma';
import Team from '../models/team';

export const teamModel={
    create:(team:Team):Observable<any>=>from(prisma.teams.create({
        data:{
            name:team.name,
            description:team.description,
            created_at:team.created_at
        }
    })
    .then(()=>console.log('Data is inserted.'))
    .catch(e=>{
        console.log('Error : ',e);
        process.exit(1);
    })
),
    getAll:():Observable<any>=>from(prisma.teams.findMany()
    .then(()=>console.log('All Data are retrieved.'))
    .catch(e=>{
        console.log('Error : ',e);
        process.exit(1);
    })
),
    getById:(id:number):Observable<any>=>from(prisma.teams.findUnique({
        where:{id}
    })
    .then(()=>console.log('Data are retrieved.'))
    .catch(e=>{
        console.log('Error : ',e);
        process.exit(1);
    })
),
    update:(team:Team):Observable<any>=>from(prisma.teams.update({
        where:{id:team.id},
        data:{
            name:team.name,
            description:team.description,
            created_at:team.created_at
        }
    })
    .then(()=>console.log('Data are updated.'))
    .catch(e=>{
        console.log('Error : ',e);
        process.exit(1);
    })
),
    delete:(id:number):Observable<any>=>from(prisma.teams.delete({
        where:{id}
    })
    .then(()=>console.log('Data are deleted.'))
    .catch(e=>{
        console.log('Error : ',e);
        process.exit(1);
    })
)

}
