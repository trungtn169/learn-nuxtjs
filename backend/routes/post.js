import { Router } from 'express';
import {
	create,
	findAll,
	findAllPublished,
	findOne,
	update,
	deleteById,
	deleteAll,
} from '../controllers/post.js';
const router = Router();

// Create a new Post
router.post('/', create);

// Retrieve all Post
router.get('/', findAll);

// Retrieve all completed Post
router.get('/completed', findAllPublished);

// Retrieve a single Post with id
router.get('/:id', findOne);

// Update a Post with id
router.put('/:id', update);

// Delete a Post with id
router.delete('/:id', deleteById);

// Delete all Post
router.delete('/', deleteAll);

export default router;
