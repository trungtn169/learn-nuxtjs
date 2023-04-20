import { Router } from 'express';
import {
	create,
	findAll,
	findOne,
	update,
	deleteById,
	deleteAll,
} from '../controllers/tag.js';
const router = Router();

// Create a new Tag
router.post('/', create);

// Retrieve all Tag
router.get('/', findAll);

// Retrieve a single Tag with id
router.get('/:id', findOne);

// Update a Tag with id
router.put('/:id', update);

// Delete a Tag with id
router.delete('/:id', deleteById);

// Delete all Tag
router.delete('/', deleteAll);

export default router;
