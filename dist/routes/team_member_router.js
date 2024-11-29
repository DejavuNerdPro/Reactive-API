"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const team_member_controller_1 = require("../controllers/team_member_controller");
const router = express_1.default.Router();
router.post('/', team_member_controller_1.TeamMemberController.create);
router.get('/', team_member_controller_1.TeamMemberController.getAll);
router.get('/:id', team_member_controller_1.TeamMemberController.getById);
router.put('/:id', team_member_controller_1.TeamMemberController.update);
router.delete('/:id', team_member_controller_1.TeamMemberController.delete);
exports.default = router;
