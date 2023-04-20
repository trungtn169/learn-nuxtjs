import { v4 as uuid } from 'uuid';
import db from '../models/index.js';
const User = db.user;
const Op = db.Sequelize.Op;

export function create(req, res) {
	// Validate request
	if (!req.body.userName) {
		res.status(400).send({
			message: 'Content can not be empty!',
		});
		return;
	}

	// Create a User
	const user = {
		id: uuid(),
		fullName: req.body.fullName,
		mail: req.body.mail,
		password: req.body.password,
		userName: req.body.userName,
		role: req.body.role ? req.body.userName : 'user',
	};

	// Save User in the database
	User.create(user)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred while creating the User.',
			});
		});
}

export function findAll(req, res) {
	const userName = req.query.userName;
	let condition = userName
		? { userName: { [Op.like]: `%${userName}%` } }
		: null;

	User.findAll({ where: condition })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred while retrieving user.',
			});
		});
}

export function findOne(req, res) {
	const id = req.params.id;

	User.findByPk(id)
		.then((data) => {
			if (data) {
				res.send(data);
			} else {
				res.status(404).send({
					message: `Cannot find User with id=${id}.`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Error retrieving User with id=' + id,
			});
		});
}

export function update(req, res) {
	const id = req.params.id;

	User.update(req.body, {
		where: { id: id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: 'User was updated successfully.',
				});
			} else {
				res.send({
					message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Error updating User with id=' + id,
			});
		});
}

export function deleteById(req, res) {
	const id = req.params.id;

	User.destroy({
		where: { id: id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: 'User was deleted successfully!',
				});
			} else {
				res.send({
					message: `Cannot delete User with id=${id}. Maybe User was not found!`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Could not delete User with id=' + id,
			});
		});
}

export function deleteAll(req, res) {
	User.destroy({
		where: {},
		truncate: false,
	})
		.then((num) => {
			res.send({ message: `${num} User were deleted successfully!` });
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred while removing all user.',
			});
		});
}
