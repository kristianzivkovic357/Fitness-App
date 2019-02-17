'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('areas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT.UNSIGNED
      },
     name: {
        allowNull: false,
        type: Sequelize.STRING(64) + 'CHARSET utf8'
     },
     city_id: {
        allowNull: false,
        type: Sequelize.BIGINT.UNSIGNED,
        references: {
            model: 'cities',
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
    return queryInterface.dropTable('areas');
  }
};