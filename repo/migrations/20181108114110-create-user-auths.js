'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_auths', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT.UNSIGNED
      },
      user_id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      hash: {
        type: Sequelize.STRING(512),
        allowNull: false
      },
      auth_type: {
        type: Sequelize.ENUM('password', 'pin', 'totp_secret'),
        allowNull: false
      },
      missed_counter: {
        type: Sequelize.BIGINT.UNSIGNED,
        defaultValue: 0,
        allowNull: false
      },
      last_missed_attempt: {
        type: Sequelize.DATE,
        allowNull: true
      },
      reset_hash: {
        type: Sequelize.STRING(512),
        allowNull: true
      },
      reset_hash_timestamp: {
        type: Sequelize.DATE,
        allowNull: true
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
    return queryInterface.dropTable('user_auths');
  }
};
