'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('gyms', {
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
     address: {
        allowNull: false,
        type: Sequelize.STRING(64) + 'CHARSET utf8'
     },
     image: {
        allowNull: true,
        type: Sequelize.STRING(1024)
     },
     website: {
        allowNull: true,
        type: Sequelize.STRING(1024)
     },
     area_id: {
        allowNull: false,
        type: Sequelize.BIGINT.UNSIGNED,
        references: {
            model: 'areas',
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
    return queryInterface.dropTable('gyms');
  }
};