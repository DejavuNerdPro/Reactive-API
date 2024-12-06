import {from,Observable} from 'rxjs';
import prisma from '../prisma_exportor/prisma';
import User from '../models/user';

export const UserModel={
    getById:(id:number):Observable<any>=>from(
        prisma.user.findUnique({where:{id}})
    ),
    findAndCreate:(user:User):Observable<any>=>from(
        prisma.user.findUnique({where:{id:user.id}})
        .then((anyUser)=>{
            return anyUser ||
            prisma.user.create({
                data:{
                    id:user.id,
                    member_id:user.member_id,
                    role_id:user.role_id,
                    password:user.password,
                    oauth_id:user.oauth_id,
                    provider:user.provider,
                    createdAt:user.createdAt,
                    updatedAt:user.updatedAt
                }
            })
            ;
        })
        .catch(e=>{
            console.log('Error : ',e);
            process.exit(1);
        })
    )
};