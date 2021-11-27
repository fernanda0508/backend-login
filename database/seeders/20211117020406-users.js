'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  

await queryInterface.bulkInsert('Users', [{
 username: 'user2',
 password: 'root',
 createdAt: new Date(),
 updatedAt: new Date(),
  }], {});

 },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Users', null, {});
    
  }
};
