'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('coach_gyms', {
      coach_id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
      },
      gym_id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
            model: 'gyms',
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
    }).then(() => {
        return queryInterface.addConstraint('coach_gyms', ['coach_id', 'gym_id'], {
            type: 'primary key',
            name: 'coach_gyms_pkey'
          });
  });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('coach_gyms');
  }
};