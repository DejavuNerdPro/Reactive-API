"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamController = void 0;
const team_1 = require("../services/team");
exports.TeamController = {
    create: (req, res, next) => {
        team_1.teamModel.create(req.body).subscribe({
            error: (e) => next(e),
            next: (team) => res.status(200).json(team)
        });
    },
    getAll: (req, res, next) => {
        team_1.teamModel.getAll().subscribe({
            error: (e) => next(e),
            next: (team) => res.status(200).json(team)
        });
    },
    getById: (req, res, next) => {
        team_1.teamModel.getById(Number(req.params.id)).subscribe({
            error: (e) => next(e),
            next: (team) => res.status(200).json(team)
        });
    },
    update: (req, res, next) => {
        team_1.teamModel.update(req.body).subscribe({
            error: (e) => next(e),
            next: (team) => res.status(200).json(team)
        });
    },
    delete: (req, res, next) => {
        team_1.teamModel.delete(Number(req.params.id)).subscribe({
            error: (e) => next(e),
            next: (team) => res.status(200).json(team)
        });
    },
};
