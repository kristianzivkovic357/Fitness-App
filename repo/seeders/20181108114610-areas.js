'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('areas', [{
      id: 1,
      name: 'Vasastan',
      city_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    }, {
        id: 2,
        name: 'Norrmalm',
        city_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 3,
        name: 'Гердет',
        city_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 4,
        name: 'Nacka',
        city_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('areas', null, {});
  }
};
