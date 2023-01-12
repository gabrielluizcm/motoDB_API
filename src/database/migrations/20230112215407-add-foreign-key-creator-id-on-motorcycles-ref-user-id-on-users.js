/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Motorcycles', 'creator_id', {
      type: Sequelize.INTEGER,
      defaultValue: null,
      allowNull: true,
    });
    await queryInterface.changeColumn('Motorcycles', 'creator_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Motorcycles', 'creator_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {},
      onDelete: null,
      onUpdate: null,
    });
  },
};
