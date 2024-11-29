"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const project_controller_1 = require("../controllers/project_controller");
const ProjectRouter = express_1.default.Router();
ProjectRouter.post('/', project_controller_1.ProjectController.create);
ProjectRouter.get('/', project_controller_1.ProjectController.getAll);
ProjectRouter.get('/:id', project_controller_1.ProjectController.getById);
ProjectRouter.put('/:id', project_controller_1.ProjectController.update);
ProjectRouter.delete('/:id', project_controller_1.ProjectController.delete);
exports.default = ProjectRouter;
