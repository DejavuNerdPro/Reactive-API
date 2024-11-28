import {from,Observable} from 'rxjs';
import {Request,Response,NextFunction} from 'express';
import prisma from '../prisma_exportor/prisma';
import Role from '../models/role';

export const roleModel={
    create:(role:Role):Observable<any>=>from(prisma.roles.create({
        data:{
            name:role.name,
            description:role.description
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
