"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const member_controller_1 = require("../controllers/member_controller");
const router = express_1.default.Router();
router.post('/', member_controller_1.MemberController.create);
router.get('/', member_controller_1.MemberController.getAll);
router.get('/:id', member_controller_1.MemberController.getById);
router.put('/:id', member_controller_1.MemberController.update);
router.delete('/:id', member_controller_1.MemberController.delete);
exports.default = router;
