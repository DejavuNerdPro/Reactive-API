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
    }
};
