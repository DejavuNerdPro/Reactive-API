import express from 'express';
import { ProjectController } from '../controllers/project_controller';

const ProjectRouter=express.Router();

ProjectRouter.post('/',ProjectController.create);
ProjectRouter.get('/',ProjectController.getAll);
ProjectRouter.get('/:id',ProjectController.getById);
ProjectRouter.put('/:id',ProjectController.update);
ProjectRouter.delete('/:id',ProjectController.delete);

export default ProjectRouter;