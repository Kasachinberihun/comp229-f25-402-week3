
import { Router } from 'express';
import * as ctrl from '../controllers/userController.js';

const router = Router();

// ----- CRUD -----
router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getById);
router.post('/', ctrl.createOne);
router.put('/:id', ctrl.updateById);
router.delete('/:id', ctrl.deleteById);
router.delete('/', ctrl.deleteAll);

// ----- AUTH -----
router.post('/register', ctrl.register);
router.post('/login', ctrl.login);
router.post('/logout', ctrl.logout);

export default router;
