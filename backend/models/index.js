import {
	DB,
	USER,
	PASSWORD,
	HOST,
	dialect as _dialect,
	pool as _pool,
} from '../config/db.config.js';
import post from './post.js';
import user from './user.js';
import tag from './tag.js';
import category from './category.js';

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
db.post = post(sequelize, Sequelize);
db.user = user(sequelize, Sequelize);
db.tag = tag(sequelize, Sequelize);
db.category = category(sequelize, Sequelize);

export default db;
