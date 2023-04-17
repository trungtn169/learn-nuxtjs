import { v4 as uuid } from 'uuid';
import db from '../models/index.js';
const Todo = db.todo;
const Op = db.Sequelize.Op;

export function create(req, res) {
	// Validate request
	if (!req.body.title) {
		res.status(400).send({
			message: 'Content can not be empty!',
		});
		return;
	}

	// Create a Todo
	const todo = {
		id: uuid(),
		title: req.body.title,
		description: req.body.description,
		completed: req.body.completed ? req.body.completed : false,
	};

	// Save Todo in the database
	Todo.create(todo)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred while creating the Todo.',
			});
		});
}

export function findAll(req, res) {
	const title = req.query.title;
	let condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

	Todo.findAll({ where: condition })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred while retrieving todo.',
			});
		});
}

export function findOne(req, res) {
	const id = req.params.id;

	Todo.findByPk(id)
		.then((data) => {
			if (data) {
				res.send(data);
			} else {
				res.status(404).send({
					message: `Cannot find Todo with id=${id}.`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Error retrieving Todo with id=' + id,
			});
		});
}

export function update(req, res) {
	const id = req.params.id;

	Todo.update(req.body, {
		where: { id: id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: 'Todo was updated successfully.',
				});
			} else {
				res.send({
					message: `Cannot update Todo with id=${id}. Maybe Todo was not found or req.body is empty!`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Error updating Todo with id=' + id,
			});
		});
}

export function deleteById(req, res) {
	const id = req.params.id;

	Todo.destroy({
		where: { id: id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: 'Todo was deleted successfully!',
				});
			} else {
				res.send({
					message: `Cannot delete Todo with id=${id}. Maybe Todo was not found!`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Could not delete Todo with id=' + id,
			});
		});
}

export function deleteAll(req, res) {
	Todo.destroy({
		where: {},
		truncate: false,
	})
		.then((num) => {
			res.send({ message: `${num} Todo were deleted successfully!` });
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred while removing all todo.',
			});
		});
}

export function findAllPublished(req, res) {
	Todo.findAll({ where: { completed: true } })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred while retrieving todo.',
			});
		});
}
