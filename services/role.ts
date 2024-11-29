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
    .then((role)=>{
        console.log('Data is inserted.');
        return role;
    })
    .catch(e=>{
        console.log('Error : ',e);
        process.exit(1);
    })
),
getAll:():Observable<any>=>from(prisma.roles.findMany()
.then((role)=>{
    console.log('All Data are retrieved.');
    return role;
})
.catch(e=>{
    console.log('Error : ',e);
    process.exit(1);
})
),
getById:(id:number):Observable<any>=>from(prisma.roles.findUnique({
    where:{id}
})
.then((role)=>{
    console.log('Data are retrieved.');
    return role;
})
.catch(e=>{
    console.log('Error : ',e);
    process.exit(1);
})
),
update:(id:number,role:Role):Observable<any>=>from(prisma.roles.update({
    where:{id:id},
    data:{
        name:role.name,
        description:role.description,
    }
})
.then((role)=>{
    console.log('Data are updated.');
    return role;
})
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
