export default (sequelize, Sequelize) => {
	const Category = sequelize.define('category', {
		id: {
			type: Sequelize.STRING,
			primaryKey: true,
		},
		title: {
			type: Sequelize.STRING,
		},
		slug: {
			type: Sequelize.STRING,
		},
		description: {
			type: Sequelize.TEXT,
		},
		idParent: {
			type: Sequelize.STRING,
		},
	});

	return Category;
};
