import express from 'express';
import { RoleController } from '../controllers/role_controller';

const router=express.Router();

router.post('/',RoleController.create);
router.get('/',RoleController.getAll);
router.get('/:id',RoleController.getById);
router.put('/:id',RoleController.update);
router.delete('/:id',RoleController.delete);

export default router;