/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Motorcycles', [
      {
        brand: 'Yamaha',
        model: 'Fazer',
        year: 2014,
        displacement: 150,
        cylinders: '1',
        weight: 130,
        top_speed: 140,
        created_at: new Date(),
        updated_at: new Date(),
        creator_id: 1,
      }, {
        brand: 'Kawasaki',
        model: 'Ninja',
        year: 2023,
        displacement: 399,
        cylinders: '2',
        weight: 164,
        top_speed: 190,
        created_at: new Date(),
        updated_at: new Date(),
        creator_id: 1,
      }, {
        brand: 'Royal Enfield',
        model: 'Meteor',
        year: 2022,
        displacement: 349,
        cylinders: '1',
        weight: 191,
        top_speed: 120,
        created_at: new Date(),
        updated_at: new Date(),
        creator_id: 1,
      }, {
        brand: 'Royal Enfield',
        model: 'Continental GT',
        year: 2023,
        displacement: 650,
        cylinders: '2',
        weight: 198,
        top_speed: 164,
        created_at: new Date(),
        updated_at: new Date(),
        creator_id: 1,
      },
    ], {});
  },
};
