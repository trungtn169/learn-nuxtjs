import { v4 as uuid } from 'uuid';
import db from '../models/index.js';
const Category = db.category;
const Op = db.Sequelize.Op;

export function create(req, res) {
	// Validate request
	if (!req.body.title) {
		res.status(400).send({
			message: 'Content can not be empty!',
		});
		return;
	}

	// Create a Category
	const post = {
		id: uuid(),
		title: req.body.title,
		slug: req.body.slug,
		description: req.body.description,
		idParent: req.body.idParent,
	};

	// Save Category in the database
	Category.create(post)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message || 'Some error occurred while creating the Category.',
			});
		});
}

export function findAll(req, res) {
	const title = req.query.title;
	let condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

	Category.findAll({ where: condition })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred while retrieving post.',
			});
		});
}

export function findOne(req, res) {
	const id = req.params.id;

	Category.findByPk(id)
		.then((data) => {
			if (data) {
				res.send(data);
			} else {
				res.status(404).send({
					message: `Cannot find Category with id=${id}.`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Error retrieving Category with id=' + id,
			});
		});
}

export function update(req, res) {
	const id = req.params.id;

	Category.update(req.body, {
		where: { id: id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: 'Category was updated successfully.',
				});
			} else {
				res.send({
					message: `Cannot update Category with id=${id}. Maybe Category was not found or req.body is empty!`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Error updating Category with id=' + id,
			});
		});
}

export function deleteById(req, res) {
	const id = req.params.id;

	Category.destroy({
		where: { id: id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: 'Category was deleted successfully!',
				});
			} else {
				res.send({
					message: `Cannot delete Category with id=${id}. Maybe Category was not found!`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Could not delete Category with id=' + id,
			});
		});
}

export function deleteAll(req, res) {
	Category.destroy({
		where: {},
		truncate: false,
	})
		.then((num) => {
			res.send({ message: `${num} Category were deleted successfully!` });
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred while removing all post.',
			});
		});
}
