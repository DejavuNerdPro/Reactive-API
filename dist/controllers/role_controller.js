"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleController = void 0;
const role_1 = require("../services/role");
exports.RoleController = {
    create: (req, res, next) => {
        role_1.roleModel.create(req.body).subscribe({
            error: (e) => next(e),
            next: (role) => res.status(200).json(role)
        });
    },
    getAll: (req, res, next) => {
        role_1.roleModel.getAll().subscribe({
            error: (e) => next(e),
            next: (role) => res.status(200).json(role)
        });
    },
    getById: (req, res, next) => {
        role_1.roleModel.getById(Number(req.params.id)).subscribe({
            error: (e) => next(e),
            next: (role) => res.status(200).json(role)
        });
    },
    update: (req, res, next) => {
        role_1.roleModel.update(Number(req.params.id), req.body).subscribe({
            error: (e) => next(e),
            next: (role) => res.status(200).json(role)
        });
    },
    delete: (req, res, next) => {
        role_1.roleModel.delete(Number(req.params.id)).subscribe({
            error: (e) => next(e),
            next: (role) => res.status(200).json(role)
        });
    },
};
