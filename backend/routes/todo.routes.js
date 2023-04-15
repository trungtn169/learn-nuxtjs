import express from 'express';
import todo from '../controllers/todo.controller.js';
export default (app) => {
	const router = express.Router();

	// Create a new Todo
	router.post('/', todo.create);

	// Retrieve all Todo
	router.get('/', todo.findAll);

	// Retrieve all published Todo
	router.get('/published', todo.findAllPublished);

	// Retrieve a single Todo with id
	router.get('/:id', todo.findOne);

	// Update a Todo with id
	router.put('/:id', todo.update);

	// Delete a Todo with id
	router.delete('/:id', todo.delete);

	// Delete all Todo
	router.delete('/', todo.deleteAll);

	app.use('/api/todo', router);
};
