const bcryptjs = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Mario 1",
          email: "mario1@gmail.com",
          password_hash: await bcryptjs.hashSync("12345678", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Mario 2",
          email: "mario2@gmail.com",
          password_hash: await bcryptjs.hashSync("12345678", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Mario 3",
          email: "mario3@gmail.com",
          password_hash: await bcryptjs.hashSync("12345678", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down() {},
};
