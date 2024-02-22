'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          dni: '01212120384',
          firstName: 'Admin',
          lastName: 'Admin',
          email: 'admin@example.com',
          password: await bcrypt.hash('admin', 10),
          miles: 0,
          role: 'ADMIN'
        },
        {
          dni: '01212120385',
          firstName: 'User',
          lastName: 'User',
          email: 'usuario@example.com',
          password: await bcrypt.hash('usuario', 10),
          miles: 20,
          role: 'USER'
        }
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
