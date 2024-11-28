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
    })),
    getAll:null,
    getById:null,
    update:null,
    delete:null

}
