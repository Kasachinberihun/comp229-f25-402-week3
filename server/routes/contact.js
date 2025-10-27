

import { Router } from 'express';
import * as ctrl from '../controllers/contactController.js';

const router = Router();

router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getById);
router.post('/', ctrl.createOne);
router.put('/:id', ctrl.updateById);
router.delete('/:id', ctrl.deleteById);
router.delete('/', ctrl.deleteAll);

export default router;
