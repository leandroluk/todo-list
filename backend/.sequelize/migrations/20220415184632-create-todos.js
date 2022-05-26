module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').DataTypes} DataTypes
   */
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('todos', {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      createdAt: {
        type: DataTypes.DATE(3),
        allowNull: false,
        field: 'created_at'
      },
      updatedAt: {
        type: DataTypes.DATE(3),
        allowNull: true,
        field: 'updated_at'
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      isDone: {
        type: DataTypes.TINYINT,
        allowNull: false,
        field: 'is_done'
      },
    });
  },
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   */
  async down(queryInterface) {
    await queryInterface.dropTable('todos');
  }
};
