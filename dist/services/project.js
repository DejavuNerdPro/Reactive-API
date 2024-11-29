"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectModel = void 0;
const rxjs_1 = require("rxjs");
const prisma_1 = __importDefault(require("../prisma_exportor/prisma"));
exports.projectModel = {
    create: (project) => (0, rxjs_1.from)(prisma_1.default.projects.create({
        data: {
            name: project.name,
            team_id: project.team_id,
            start_date: project.start_date,
            description: project.description,
            end_date: project.end_date
        }
    })
        .then(() => console.log('Data is inserted.'))
        .catch(e => {
        console.log('Error : ', e);
        process.exit(1);
    })),
    getAll: () => (0, rxjs_1.from)(prisma_1.default.projects.findMany()
        .then(() => console.log('All Data are retrieved.'))
        .catch(e => {
        console.log('Error : ', e);
        process.exit(1);
    })),
    getById: (id) => (0, rxjs_1.from)(prisma_1.default.projects.findUnique({
        where: { id }
    })
        .then(() => console.log('Data are retrieved.'))
        .catch(e => {
        console.log('Error : ', e);
        process.exit(1);
    })),
    update: (project) => (0, rxjs_1.from)(prisma_1.default.projects.update({
        where: { id: project.id },
        data: {
            name: project.name,
            description: project.description,
            team_id: project.team_id,
            start_date: project.start_date,
            end_date: project.end_date
        }
    })
        .then(() => console.log('Data are updated.'))
        .catch(e => {
        console.log('Error : ', e);
        process.exit(1);
    })),
    delete: (id) => (0, rxjs_1.from)(prisma_1.default.projects.delete({
        where: { id }
    })
        .then(() => console.log('Data are deleted.'))
        .catch(e => {
        console.log('Error : ', e);
        process.exit(1);
    }))
};
