"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberController = void 0;
const team_member_1 = require("../services/team_member");
exports.TeamMemberController = {
    create: (req, res, next) => {
        team_member_1.teamMemberModel.create(req.body).subscribe({
            error: (e) => next(e),
            next: (teamMember) => res.status(200).json(teamMember)
        });
    },
    getAll: (req, res, next) => {
        team_member_1.teamMemberModel.getAll().subscribe({
            error: (e) => next(e),
            next: (teamMember) => res.status(200).json(teamMember)
        });
    },
    getById: (req, res, next) => {
        team_member_1.teamMemberModel.getById(Number(req.params.id)).subscribe({
            error: (e) => next(e),
            next: (teamMember) => res.status(200).json(teamMember)
        });
    },
    update: (req, res, next) => {
        team_member_1.teamMemberModel.update(req.body).subscribe({
            error: (e) => next(e),
            next: (teamMember) => res.status(200).json(teamMember)
        });
    },
    delete: (req, res, next) => {
        team_member_1.teamMemberModel.delete(Number(req.params.id)).subscribe({
            error: (e) => next(e),
            next: (teamMember) => res.status(200).json(teamMember)
        });
    },
};
