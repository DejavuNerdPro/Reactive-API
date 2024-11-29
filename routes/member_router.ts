import express from 'express';
import { MemberController } from '../controllers/member_controller';

const router=express.Router();

router.post('/',MemberController.create);
router.get('/',MemberController.getAll);
router.get('/:id',MemberController.getById);
router.put('/:id',MemberController.update);
router.delete('/:id',MemberController.delete);

export default router;