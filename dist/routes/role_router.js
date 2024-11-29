"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const role_controller_1 = require("../controllers/role_controller");
const router = express_1.default.Router();
router.post('/', role_controller_1.RoleController.create);
router.get('/', role_controller_1.RoleController.getAll);
router.get('/:id', role_controller_1.RoleController.getById);
router.put('/:id', role_controller_1.RoleController.update);
router.delete('/:id', role_controller_1.RoleController.delete);
exports.default = router;
