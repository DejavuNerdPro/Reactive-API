import {from,Observable} from 'rxjs';
import {Request,Response,NextFunction} from 'express';
import prisma from '../prisma_exportor/prisma';
import TeamMember from '../models/team_member';

export const teamMemberModel={
    create:(teamMember:TeamMember):Observable<any>=>from(prisma.teamMember.create({
        data:{
            team_id:teamMember.team_id,
            member_id:teamMember.member_id,
            role_id:teamMember.role_id,
            name:teamMember.name,
            description:teamMember.description,
            created_at:teamMember.created_at
        }
    })
    .then(()=>console.log('Data is inserted.'))
    .catch(e=>{
        console.log('Error : ',e);
        process.exit(1);
    })
),
    getAll:():Observable<any>=>from(prisma.teamMember.findMany()
    .then(()=>console.log('All Data are retrieved.'))
    .catch(e=>{
        console.log('Error : ',e);
        process.exit(1);
    })
),
    getById:(id:number):Observable<any>=>from(prisma.teamMember.findUnique({
        where:{id}
    })
    .then(()=>console.log('Data are retrieved.'))
    .catch(e=>{
        console.log('Error : ',e);
        process.exit(1);
    })
),
    update:(teamMember:TeamMember):Observable<any>=>from(prisma.teamMember.update({
        where:{id:teamMember.id},
        data:{
            team_id:teamMember.team_id,
            member_id:teamMember.member_id,
            role_id:teamMember.role_id,
            name:teamMember.name,
            description:teamMember.description,
            created_at:teamMember.created_at
        }
    })
    .then(()=>console.log('Data are updated.'))
    .catch(e=>{
        console.log('Error : ',e);
        process.exit(1);
    })
),
    delete:(id:number):Observable<any>=>from(prisma.teamMember.delete({
        where:{id}
    })
    .then(()=>console.log('Data are deleted.'))
    .catch(e=>{
        console.log('Error : ',e);
        process.exit(1);
    })
)

}
