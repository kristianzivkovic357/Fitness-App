'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('gyms', [{
      id: 1,
      name: 'World class Vasastan',
      address: 'Döbelnsgatan 58',
      image: 'http://worldclass.se/wp-content/themes/pigment-theme/img/graphics/wc_logo.svg',
      website: 'http://worldclass.se/',
      area_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    }, {
        id: 2,
        name: 'Delta Gym AB',
        address: 'Hälsingegatan 5',
        image: 'http://static1.squarespace.com/static/5a08ae734c326d70b0e93c8f/t/5a5259680d9297f9a593dd8d/1545320543192/%3Fformat=1500w',
        website: 'https://deltagym.com/',
        area_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },{
        id: 3,
        name: 'CrossFit Nordic',
        address: 'Hälsingegatan 47',
        image: 'https://www.crossfitnordic.se/wp-content/uploads/2016/09/Nordic-header-logo-mini-1.png',
        website: 'https://www.crossfitnordic.se/',
        area_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 4,
        name: 'Nordic Wellness Odenplan',
        address: 'Västmannagatan 44A',
        image: 'https://nordicwellness.se/images/logo.svg',
        website: 'https://nordicwellness.se/vara-klubbar/stockholm/odenplan/',
        area_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 5,
        name: 'Fitness24Seven',
        address: 'Tegeluddsvägen 80',
        image: 'https://se.fitness24seven.com/static/media/logo-transp.42e5df96.svg',
        website: 'https://se.fitness24seven.com/sv/vara-gym/stockholm-gardet',
        area_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 6,
        name: 'Friskis&Svettis',
        address: 'Tegeluddsvägen 31',
        image: 'https://www.friskissvettis.se/assets/images/friskis_logo.svg',
        website: 'https://www.friskissvettis.se/stockholm/anlaggningar/gardet/',
        area_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 7,
        name: 'Slagskeppet',
        address: 'Lidingövägen 75',
        image: 'https://www.slagskeppet.com/wp-content/uploads/2018/07/cropped-slagskeppet_logo_544x100.png',
        website: 'https://www.slagskeppet.com/',
        area_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 8,
        name: 'Puls & Träning',
        address: 'Gamla Värmdövägen 4',
        image: 'https://www.pulsochtraning.se/wp-content/uploads/2018/12/puls_och_traning.svg',
        website: 'https://www.pulsochtraning.se/gym/nacka-finntorp/',
        area_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 9,
        name: 'Actic Hammarby Sjöstad',
        address: 'Skeppsmäklargatan 1',
        image: 'https://www.actic.se/app/themes/Divi/images/actic-logotyp.svg',
        website: 'https://www.actic.se/hitta-gym/gym-i-stockholm/stockholm-hammarby-sjostad/',
        area_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('gyms', null, {});
  }
};
