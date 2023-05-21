'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('usuarios', [
    {
      nome: 'um',
      usuario: 'um',
      senha: 'um',
      email: 'um'
    },
    {
      nome: 'dois',
      usuario: 'dois',
      senha: 'dois',
      email: 'dois'
    },
    {
      nome: 'tres',
      usuario: 'tres',
      senha: 'tres',
      email: 'tres'
    },
    {
      nome: 'quatro',
      usuario: 'quatro',
      senha: 'quatro',
      email: 'quatro'
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
    await queryInterface.bulkDelete('usuarios', null, {});
    
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
