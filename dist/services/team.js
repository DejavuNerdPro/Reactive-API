"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamModel = void 0;
const rxjs_1 = require("rxjs");
const prisma_1 = __importDefault(require("../prisma_exportor/prisma"));
exports.teamModel = {
    create: (team) => (0, rxjs_1.from)(prisma_1.default.teams.create({
        data: {
            name: team.name,
            description: team.description,
            created_at: team.created_at
        }
    })
        .then(() => console.log('Data is inserted.'))
        .catch(e => {
        console.log('Error : ', e);
        process.exit(1);
    })),
    getAll: () => (0, rxjs_1.from)(prisma_1.default.teams.findMany()
        .then(() => console.log('All Data are retrieved.'))
        .catch(e => {
        console.log('Error : ', e);
        process.exit(1);
    })),
    getById: (id) => (0, rxjs_1.from)(prisma_1.default.teams.findUnique({
        where: { id }
    })
        .then(() => console.log('Data are retrieved.'))
        .catch(e => {
        console.log('Error : ', e);
        process.exit(1);
    })),
    update: (team) => (0, rxjs_1.from)(prisma_1.default.teams.update({
        where: { id: team.id },
        data: {
            name: team.name,
            description: team.description,
            created_at: team.created_at
        }
    })
        .then(() => console.log('Data are updated.'))
        .catch(e => {
        console.log('Error : ', e);
        process.exit(1);
    })),
    delete: (id) => (0, rxjs_1.from)(prisma_1.default.teams.delete({
        where: { id }
    })
        .then(() => console.log('Data are deleted.'))
        .catch(e => {
        console.log('Error : ', e);
        process.exit(1);
    }))
};
