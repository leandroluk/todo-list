module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('todos', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      createdAt: {
        type: Sequelize.DATE(3),
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE(3),
        allowNull: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      isDone: {
        type: Sequelize.TINYINT,
        allowNull: false
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('todos');
  }
};
