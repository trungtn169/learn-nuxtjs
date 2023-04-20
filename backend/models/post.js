export default (sequelize, Sequelize) => {
	const Post = sequelize.define('post', {
		id: {
			type: Sequelize.STRING,
			primaryKey: true,
		},
		title: {
			type: Sequelize.STRING,
		},
		subTitle: {
			type: Sequelize.STRING,
		},
		slug: {
			type: Sequelize.STRING,
		},
		description: {
			type: Sequelize.TEXT,
		},
		shortDescription: {
			type: Sequelize.TEXT,
		},
		published: {
			type: Sequelize.BOOLEAN,
		},
		idCategory: {
			type: Sequelize.JSON,
		},
		idTag: {
			type: Sequelize.JSON,
		},
		idAuthor: {
			type: Sequelize.STRING,
		},
	});

	return Post;
};
