// server/routes/project.js
import { verifyToken } from "../middleware/verifyToken.js";
import { Router } from 'express';
import * as ctrl from '../controllers/projectController.js';

const router = Router();

// Optional test route
router.get('/debug', (_req, res) => res.json({ ok: true, at: '/projects' }));

// REST API routes
router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getById);
router.post('/', verifyToken, ctrl.createOne);
router.put('/:id', ctrl.updateById);
router.delete('/:id', ctrl.deleteById);
router.delete('/', ctrl.deleteAll);

export default router;

