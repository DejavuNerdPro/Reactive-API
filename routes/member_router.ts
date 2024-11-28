import express from 'express';
import { MemberController } from '../controllers/member_controller';

const router=express.Router();

router.post('/',MemberController.create);

export default router;