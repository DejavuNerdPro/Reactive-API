"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamMemberModel = void 0;
const rxjs_1 = require("rxjs");
const prisma_1 = __importDefault(require("../prisma_exportor/prisma"));
exports.teamMemberModel = {
    create: (teamMember) => (0, rxjs_1.from)(prisma_1.default.teamMember.create({
        data: {
            team_id: teamMember.team_id,
            member_id: teamMember.member_id,
            role_id: teamMember.role_id,
            name: teamMember.name,
            description: teamMember.description,
            created_at: teamMember.created_at
        }
    })),
    getAll: null,
    getById: null,
    update: null,
    delete: null
};
