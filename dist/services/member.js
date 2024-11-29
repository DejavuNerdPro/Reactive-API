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
    })
        .then(() => console.log('Data is inserted.'))
        .catch(e => {
        console.log('Error : ', e);
        process.exit(1);
    })),
    getAll: () => (0, rxjs_1.from)(prisma_1.default.member.findMany()
        .then((member) => {
        console.log('All Data are retrieved.');
        return member;
    })
        .catch(e => {
        console.log('Error : ', e);
        process.exit(1);
    })),
    getById: (id) => (0, rxjs_1.from)(prisma_1.default.member.findUnique({
        where: { id }
    })
        .then((member) => {
        console.log('Data are retrieved.');
        return member;
    })
        .catch(e => {
        console.log('Error : ', e);
        process.exit(1);
    })),
    update: (id, member) => (0, rxjs_1.from)(prisma_1.default.member.update({
        where: { id },
        data: {
            name: member.name,
            email: member.email,
            joined_at: member.joined_at
        }
    })
        .then((member) => {
        console.log('Data are updated.');
        return member;
    })
        .catch(e => {
        console.log('Error : ', e);
        process.exit(1);
    })),
    delete: (id) => (0, rxjs_1.from)(prisma_1.default.member.delete({
        where: { id }
    })
        .then(() => console.log('Data are deleted.'))
        .catch(e => {
        console.log('Error : ', e);
        process.exit(1);
    }))
};
