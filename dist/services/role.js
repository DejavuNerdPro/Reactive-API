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
        .then(() => console.log('Data is inserted.'))
        .catch(e => {
        console.log('Error : ', e);
        process.exit(1);
    })),
    getAll: null,
    getById: null,
    update: null,
    delete: null
};
