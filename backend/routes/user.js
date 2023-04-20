import { Router } from 'express';
import {
	create,
	findAll,
	findOne,
	update,
	deleteById,
	deleteAll,
} from '../controllers/user.js';
const router = Router();

// Create a new User
router.post('/', create);

// Retrieve all User
router.get('/', findAll);

// Retrieve a single User with id
router.get('/:id', findOne);

// Update a User with id
router.put('/:id', update);

// Delete a User with id
router.delete('/:id', deleteById);

// Delete all User
router.delete('/', deleteAll);

export default router;