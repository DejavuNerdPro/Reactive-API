import express from 'express';
import { TeamController } from '../controllers/team_controller';

const router=express.Router();

router.post('/',TeamController.create);

export default router;