
import { Router } from 'express';
import {
  getAll, getById, createOne, updateById, deleteById, deleteAll,
  register, login, logout
} from '../controllers/userController.js';

const router = Router();

// CRUD
router.get('/', getAll);
router.get('/:id', getById);
router.post('/', createOne);
router.put('/:id', updateById);
router.delete('/:id', deleteById);
router.delete('/', deleteAll);

// Auth
router.post('/auth/register', register);
router.post('/auth/login',    login);
router.post('/auth/logout',   logout);

export default router;
