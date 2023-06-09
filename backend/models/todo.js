export default (sequelize, Sequelize) => {
	const Todo = sequelize.define('todo', {
		id: {
			type: Sequelize.STRING,
			primaryKey: true,
		},
		title: {
			type: Sequelize.STRING,
		},
		description: {
			type: Sequelize.STRING,
		},
		published: {
			type: Sequelize.BOOLEAN,
		},
	});

	return Todo;
};
