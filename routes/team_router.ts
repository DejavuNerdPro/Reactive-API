import express from 'express';
import { TeamController } from '../controllers/team_controller';

const router=express.Router();

router.post('/',TeamController.create);
router.get('/',TeamController.getAll);
router.get('/:id',TeamController.getById);
router.put('/:id',TeamController.update);
router.delete('/:id',TeamController.delete);

export default router;