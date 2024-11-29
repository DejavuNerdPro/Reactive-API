"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberController = void 0;
const member_1 = require("../services/member");
exports.MemberController = {
    create: (req, res, next) => {
        member_1.memberModel.create(req.body).subscribe({
            error: (e) => next(e),
            next: (member) => res.status(200).json(member)
        });
    },
    getAll: (req, res, next) => {
        member_1.memberModel.getAll().subscribe({
            error: (e) => next(e),
            next: (member) => res.status(200).json(member)
        });
    },
    getById: (req, res, next) => {
        member_1.memberModel.getById(Number(req.params.id)).subscribe({
            error: (e) => next(e),
            next: (member) => res.status(200).json(member)
        });
    },
    update: (req, res, next) => {
        member_1.memberModel.update(Number(req.params.id), req.body).subscribe({
            error: (e) => next(e),
            next: (member) => res.status(200).json(member)
        });
    },
    delete: (req, res, next) => {
        member_1.memberModel.delete(Number(req.params.id)).subscribe({
            error: (e) => next(e),
            next: (member) => res.status(200).json(member)
        });
    },
};
