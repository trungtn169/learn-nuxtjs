import {
	DB,
	USER,
	PASSWORD,
	HOST,
	dialect as _dialect,
	pool as _pool,
} from '../config/db.config.js';
import todo from './todo.model.js';

import Sequelize from 'sequelize';
const sequelize = new Sequelize(DB, USER, PASSWORD, {
	host: HOST,
	dialect: _dialect,
	operatorsAliases: 0,
	pool: {
		max: _pool.max,
		min: _pool.min,
		acquire: _pool.acquire,
		idle: _pool.idle,
	},
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.todo = todo(sequelize, Sequelize);

export default db;
