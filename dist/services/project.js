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
    getAll: () => (0, rxjs_1.from)(prisma_1.default.projects.findMany({
        include: { teams: true }
    })
        .then((project) => {
        console.log('All Data are retrieved.');
        return project;
    })
        .catch(e => {
        console.log('Error : ', e);
        process.exit(1);
    })
        .finally(() => prisma_1.default.$disconnect())),
    getById: (id) => (0, rxjs_1.from)(prisma_1.default.projects.findUnique({
        where: { id }, include: { teams: true }
    })
        .then((project) => {
        console.log('Data are retrieved.');
        return project;
    })
        .catch(e => {
        console.log('Error : ', e);
        process.exit(1);
    })),
    update: (id, project) => (0, rxjs_1.from)(prisma_1.default.projects.update({
        where: { id },
        data: {
            name: project.name,
            description: project.description,
            team_id: project.team_id,
            start_date: project.start_date,
            end_date: project.end_date
        },
        include: { teams: true }
    })
        .then((project) => {
        console.log('Data are updated.');
        return project;
    })
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
