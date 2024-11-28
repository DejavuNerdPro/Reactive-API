"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberModel = void 0;
const rxjs_1 = require("rxjs");
const prisma_1 = __importDefault(require("../prisma_exportor/prisma"));
exports.memberModel = {
    create: (member) => (0, rxjs_1.from)(prisma_1.default.member.create({
        data: {
            name: member.name,
            email: member.email,
            joined_at: member.joined_at
        }
    })),
    getAll: null,
    getById: null,
    update: null,
    delete: null
};
