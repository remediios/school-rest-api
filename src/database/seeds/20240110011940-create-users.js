const bcryptjs = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Antonio",
          email: "antmarkky@example.com",
          password_hash: await bcryptjs.hashSync("12345678", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Catline",
          email: "catlinesuarez12@example.com",
          password_hash: await bcryptjs.hashSync("12345678", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Peter",
          email: "petercab@example.com",
          password_hash: await bcryptjs.hashSync("12345678", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  // eslint-disable-next-line no-empty-function
  async down() {},
};
