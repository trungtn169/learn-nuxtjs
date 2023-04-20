export default (sequelize, Sequelize) => {
	const Role = sequelize.define('role', {
		id: {
			type: Sequelize.STRING,
			primaryKey: true,
		},
		role: {
			type: Sequelize.STRING,
		},
	});

	return Role;
};
