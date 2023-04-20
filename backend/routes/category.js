import { Router } from 'express';
import {
	create,
	findAll,
	findOne,
	update,
	deleteById,
	deleteAll,
} from '../controllers/category.js';
const router = Router();

// Create a new Category
router.post('/', create);

// Retrieve all Category
router.get('/', findAll);

// Retrieve a single Category with id
router.get('/:id', findOne);

// Update a Category with id
router.put('/:id', update);

// Delete a Category with id
router.delete('/:id', deleteById);

// Delete all Category
router.delete('/', deleteAll);

export default router;
