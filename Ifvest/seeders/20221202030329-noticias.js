'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('noticias', [
    {
      titulo: 'um',
      sub_titulo: 'um',
      resumo: 'um',
      usuarioId: 1      
    },
    {
      titulo: 'dois',
      sub_titulo: 'dois',
      resumo: 'dois',
      usuarioId: 2
    },
    {
      titulo: 'tres',
      sub_titulo: 'tres',
      resumo: 'tres',
      usuarioId: 3
    },
    {
      titulo: 'quatro',
      sub_titulo: 'quatro',
      resumo: 'quatro',
      usuarioId: 2
    },

  ], {});
    
    
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('noticias', null, {});
    
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
