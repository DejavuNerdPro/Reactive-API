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
    })),
    getAll:null,
    getById:null,
    update:null,
    delete:null

}
