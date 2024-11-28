import express from 'express';
import { RoleController } from '../controllers/role_controller';

const router=express.Router();

router.post('/',RoleController.create);

export default router;