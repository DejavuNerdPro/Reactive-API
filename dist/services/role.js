"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleModel = void 0;
const rxjs_1 = require("rxjs");
const prisma_1 = __importDefault(require("../prisma_exportor/prisma"));
exports.roleModel = {
    create: (role) => (0, rxjs_1.from)(prisma_1.default.roles.create({
        data: {
            name: role.name,
            description: role.description
        }
    })
        .then((role) => {
        console.log('Data is inserted.');
        return role;
    })
        .catch(e => {
        console.log('Error : ', e);
        process.exit(1);
    })),
    getAll: () => (0, rxjs_1.from)(prisma_1.default.roles.findMany()
        .then((role) => {
        console.log('All Data are retrieved.');
        return role;
    })
        .catch(e => {
        console.log('Error : ', e);
        process.exit(1);
    })),
    getById: (id) => (0, rxjs_1.from)(prisma_1.default.roles.findUnique({
        where: { id }
    })
        .then((role) => {
        console.log('Data are retrieved.');
        return role;
    })
        .catch(e => {
        console.log('Error : ', e);
        process.exit(1);
    })),
    update: (id, role) => (0, rxjs_1.from)(prisma_1.default.roles.update({
        where: { id: id },
        data: {
            name: role.name,
            description: role.description,
        }
    })
        .then((role) => {
        console.log('Data are updated.');
        return role;
    })
        .catch(e => {
        console.log('Error : ', e);
        process.exit(1);
    })),
    delete: (id) => (0, rxjs_1.from)(prisma_1.default.roles.delete({
        where: { id }
    })
        .then(() => console.log('Data are deleted.'))
        .catch(e => {
        console.log('Error : ', e);
        process.exit(1);
    }))
};
