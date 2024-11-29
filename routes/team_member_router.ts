import express from 'express';
import { TeamMemberController } from '../controllers/team_member_controller';

const router=express.Router();

router.post('/',TeamMemberController.create);
router.get('/',TeamMemberController.getAll);
router.get('/:id',TeamMemberController.getById);
router.put('/:id',TeamMemberController.update);
router.delete('/:id',TeamMemberController.delete);


export default router;