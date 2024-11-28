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
    getAll:null,
    getById:null,
    update:null,
    delete:null

}
