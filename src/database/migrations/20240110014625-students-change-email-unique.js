/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("students", "email", {
      type: Sequelize.STRING,
      allowNull: true,
      unique: true,
    });
  },

  // eslint-disable-next-line no-empty-function
  async down() {},
};
