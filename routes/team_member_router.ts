import express from 'express';
import { TeamMemberController } from '../controllers/team_member_controller';

const router=express.Router();

router.post('/',TeamMemberController.create);

export default router;