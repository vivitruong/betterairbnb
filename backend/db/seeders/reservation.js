'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reservations', [
      {
        roomId: 15,
        userId: 1,
        startDate: '2022-07-04',
        endDate: '2022-07-07'
      },
      {
        roomId: 1,
        userId: 3,
        startDate: '2022-08-01',
        endDate: '2022-08-03'
      },
      {
        roomId: 2,
        userId: 3,
        startDate: '2022-08-06',
        endDate: '2022-08-12'
      },
      {
        roomId: 3,
        userId: 4,
        startDate: '2022-08-18',
        endDate: '2022-08-22'
      },
      {
        roomId: 1,
        userId: 2,
        startDate: '2022-08-28',
        endDate: '2022-08-31'
      },
      {
        roomId: 31,
        userId: 1,
        startDate: '2022-08-31',
        endDate: '2022-09-01'
      },
      {
        roomId: 27,
        userId: 1,
        startDate: '2022-09-04',
        endDate: '2022-09-07'
      },
      {
        roomId: 30,
        userId: 1,
        startDate: '2022-09-12',
        endDate: '2022-09-17'
      },
      {
        roomId: 3,
        userId: 2,
        startDate: '2022-09-04',
        endDate: '2022-09-07'
      },
      {
        roomId: 1,
        userId: 4,
        startDate: '2022-10-04',
        endDate: '2022-10-07'
      },
      {
        roomId: 2,
        userId: 5,
        startDate: '2022-10-04',
        endDate: '2022-10-07'
      },
      {
        roomId: 3,
        userId: 6,
        startDate: '2022-10-04',
        endDate: '2022-10-07'
      },
      {
        roomId: 13,
        userId: 6,
        startDate: '2022-10-04',
        endDate: '2022-10-07'
      },
      {
        roomId: 13,
        userId: 1,
        startDate: '2022-12-04',
        endDate: '2022-12-07'
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reservations', null, {});
  }
};
