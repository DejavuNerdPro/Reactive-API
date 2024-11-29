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
    .then((team)=>{
        console.log('Data is inserted.');
        return team;
    })
    .catch(e=>{
        console.log('Error : ',e);
        process.exit(1);
    })
),
    getAll:():Observable<any>=>from(prisma.teams.findMany()
    .then((team)=>{
        console.log('All Data are retrieved.');
        return team;
    })
    .catch(e=>{
        console.log('Error : ',e);
        process.exit(1);
    })
),
    getById:(id:number):Observable<any>=>from(prisma.teams.findUnique({
        where:{id}
    })
    .then((team)=>{
        console.log('Data are retrieved.');
        return team;
    })
    .catch(e=>{
        console.log('Error : ',e);
        process.exit(1);
    })
),
    update:(id:number,team:Team):Observable<any>=>from(prisma.teams.update({
        where:{id:id},
        data:{
            name:team.name,
            description:team.description,
            created_at:team.created_at
        }
    })
    .then((team)=>{
        console.log('Data are updated.');
        return team;
    })
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
