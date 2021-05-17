module.exports = (sequelize, Sequelize) => {
	const Tutorial = sequelize.define('tutorial', {	
	  id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
    },
	  title: {
			type: Sequelize.STRING
	  },
	  description: {
		  type: Sequelize.STRING
  	},published: {
        type: Sequelize.INTEGER
    },createdAt: {
        type: Sequelize.DATE
    },updatedAt: {
        type: Sequelize.DATE
    }

	});
	
	return Tutorial;
}