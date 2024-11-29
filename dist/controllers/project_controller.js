"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectController = void 0;
const project_1 = require("../services/project");
exports.ProjectController = {
    create: (req, res, next) => {
        project_1.projectModel.create(req.body).subscribe({
            error: (e) => next(e),
            next: (project) => res.status(200).json(project)
        });
    },
    getAll: (req, res, next) => {
        project_1.projectModel.getAll().subscribe({
            error: (e) => next(e),
            next: (project) => {
                console.log('Project : ', project);
                res.status(200).json(project);
            }
        });
    },
    getById: (req, res, next) => {
        project_1.projectModel.getById(Number(req.params.id)).subscribe({
            error: (e) => next(e),
            next: (project) => res.status(200).json(project)
        });
    },
    update: (req, res, next) => {
        console.log("ID : ", req.params.id);
        project_1.projectModel.update(Number(req.params.id), req.body).subscribe({
            error: (e) => next(e),
            next: (project) => res.status(200).json(project)
        });
    },
    delete: (req, res, next) => {
        project_1.projectModel.delete(Number(req.params.id)).subscribe({
            error: (e) => next(e),
            next: (project) => res.status(200).json(project)
        });
    },
};
