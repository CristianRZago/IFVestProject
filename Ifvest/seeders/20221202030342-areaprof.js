'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('areaprofessor', [
    {
      area_trabalho: 'portugues',
      usuarioId: 1,
      
    },
    {
      usuarioId: 2,
      area_trabalho: 'ingles'
    },
    {
      usuarioId: 3,
      area_trabalho: 'japones'
    },
    {
      usuarioId: 2,
      area_trabalho: 'russo'
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
    await queryInterface.bulkDelete('areaprofessor', null, {});
    
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
