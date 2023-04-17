import { Router } from 'express';
import {
	create,
	findAll,
	findAllPublished,
	findOne,
	update,
	deleteById,
	deleteAll,
} from '../controllers/todo.js';
const router = Router();

// Create a new Todo
router.post('/', create);

// Retrieve all Todo
router.get('/', findAll);

// Retrieve all completed Todo
router.get('/completed', findAllPublished);

// Retrieve a single Todo with id
router.get('/:id', findOne);

// Update a Todo with id
router.put('/:id', update);

// Delete a Todo with id
router.delete('/:id', deleteById);

// Delete all Todo
router.delete('/', deleteAll);

export default router;
