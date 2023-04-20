export default (sequelize, Sequelize) => {
	const Tag = sequelize.define('tag', {
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
	});

	return Tag;
};
