'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  

await queryInterface.bulkInsert('Products', [{
name: 'Iphone',
preco: 5000,
preco_desc: 4500,
prod_qt_estoque: 200,
cate_id: 1,
created_at: new Date(),
updated_at: new Date(),
}, 
{
  name: 'Samsung',
  preco: 1500,
  preco_desc: 1350,
  prod_qt_estoque: 190,
  cate_id: 1,
  created_at: new Date(),
  updated_at: new Date()

  }
], {});

},
  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Products', null, {});
    
  }
};
