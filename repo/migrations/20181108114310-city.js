'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT.UNSIGNED
      },
     name: {
        allowNull: false,
        type: Sequelize.STRING(64)
     },
     country_id: {
        allowNull:  false,
        type: Sequelize.BIGINT.UNSIGNED,
        references: {
            model: 'countries',
            key: 'id'
        }
     },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cities');
  }
};