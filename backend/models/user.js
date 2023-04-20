export default (sequelize, Sequelize) => {
	const User = sequelize.define('user', {
		id: {
			type: Sequelize.STRING,
			primaryKey: true,
		},
		fullName: {
			type: Sequelize.STRING,
		},
		mail: {
			type: Sequelize.STRING,
		},
		password: {
			type: Sequelize.STRING,
		},
		userName: {
			type: Sequelize.STRING,
		},
		role: {
			type: Sequelize.STRING,
		},
	});

	return User;
};
