"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const team_controller_1 = require("../controllers/team_controller");
const router = express_1.default.Router();
router.post('/', team_controller_1.TeamController.create);
router.get('/', team_controller_1.TeamController.getAll);
router.get('/:id', team_controller_1.TeamController.getById);
router.put('/:id', team_controller_1.TeamController.update);
router.delete('/:id', team_controller_1.TeamController.delete);
exports.default = router;
