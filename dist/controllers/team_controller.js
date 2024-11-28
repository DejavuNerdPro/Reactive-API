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
    }
};
