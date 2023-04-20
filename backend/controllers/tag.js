import { v4 as uuid } from 'uuid';
import db from '../models/index.js';
const Post = db.tag;
const Op = db.Sequelize.Op;

export function create(req, res) {
	// Validate request
	if (!req.body.title) {
		res.status(400).send({
			message: 'Content can not be empty!',
		});
		return;
	}

	// Create a Post
	const tag = {
		id: uuid(),
		title: req.body.title,
		slug: req.body.slug,
		description: req.body.description,
	};

	// Save Post in the database
	Post.create(tag)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred while creating the Post.',
			});
		});
}

export function findAll(req, res) {
	const title = req.query.title;
	let condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

	Post.findAll({ where: condition })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred while retrieving tag.',
			});
		});
}

export function findOne(req, res) {
	const id = req.params.id;

	Post.findByPk(id)
		.then((data) => {
			if (data) {
				res.send(data);
			} else {
				res.status(404).send({
					message: `Cannot find Post with id=${id}.`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Error retrieving Post with id=' + id,
			});
		});
}

export function update(req, res) {
	const id = req.params.id;

	Post.update(req.body, {
		where: { id: id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: 'Post was updated successfully.',
				});
			} else {
				res.send({
					message: `Cannot update Post with id=${id}. Maybe Post was not found or req.body is empty!`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Error updating Post with id=' + id,
			});
		});
}

export function deleteById(req, res) {
	const id = req.params.id;

	Post.destroy({
		where: { id: id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: 'Post was deleted successfully!',
				});
			} else {
				res.send({
					message: `Cannot delete Post with id=${id}. Maybe Post was not found!`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Could not delete Post with id=' + id,
			});
		});
}

export function deleteAll(req, res) {
	Post.destroy({
		where: {},
		truncate: false,
	})
		.then((num) => {
			res.send({ message: `${num} Post were deleted successfully!` });
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred while removing all tag.',
			});
		});
}
