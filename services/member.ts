import {from,Observable} from 'rxjs';
import {Request,Response,NextFunction} from 'express';
import prisma from '../prisma_exportor/prisma';
import Member from '../models/member';

export const memberModel={
    create:(member:Member):Observable<any>=>from(prisma.member.create({
        data:{
            name:member.name,
            email:member.email,
            joined_at:member.joined_at
        }
    })
    .then(()=>console.log('Data is inserted.'))
    .catch(e=>{
        console.log('Error : ',e);
        process.exit(1);
    })
),
    getAll:():Observable<any>=>from(prisma.member.findMany()
    .then((member)=>{
        console.log('All Data are retrieved.');
        return member;
    })
    .catch(e=>{
        console.log('Error : ',e);
        process.exit(1);
    })
),
    getById:(id:number):Observable<any>=>from(prisma.member.findUnique({
        where:{id}
    })
    .then((member)=>{
        console.log('Data are retrieved.');
        return member;
    })
    .catch(e=>{
        console.log('Error : ',e);
        process.exit(1);
    })
),
    update:(id:number,member:Member):Observable<any>=>from(prisma.member.update({
        where:{id},
        data:{
            name:member.name,
            email:member.email,
            joined_at:member.joined_at
        }
    })
    .then((member)=>{
        console.log('Data are updated.');
        return member;
    })
    .catch(e=>{
        console.log('Error : ',e);
        process.exit(1);
    })
),
    delete:(id:number):Observable<any>=>from(prisma.member.delete({
        where:{id}
    })
    .then(()=>console.log('Data are deleted.'))
    .catch(e=>{
        console.log('Error : ',e);
        process.exit(1);
    })
)

}
