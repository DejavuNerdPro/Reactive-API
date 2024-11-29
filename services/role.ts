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
getAll:():Observable<any>=>from(prisma.roles.findMany()
.then(()=>console.log('All Data are retrieved.'))
.catch(e=>{
    console.log('Error : ',e);
    process.exit(1);
})
),
getById:(id:number):Observable<any>=>from(prisma.roles.findUnique({
    where:{id}
})
.then(()=>console.log('Data are retrieved.'))
.catch(e=>{
    console.log('Error : ',e);
    process.exit(1);
})
),
update:(role:Role):Observable<any>=>from(prisma.roles.update({
    where:{id:role.id},
    data:{
        name:role.name,
        description:role.description,
    }
})
.then(()=>console.log('Data are updated.'))
.catch(e=>{
    console.log('Error : ',e);
    process.exit(1);
})
),
delete:(id:number):Observable<any>=>from(prisma.roles.delete({
    where:{id}
})
.then(()=>console.log('Data are deleted.'))
.catch(e=>{
    console.log('Error : ',e);
    process.exit(1);
})
)

}
