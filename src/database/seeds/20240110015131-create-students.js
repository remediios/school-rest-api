/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "students",
      [
        {
          first_name: "Antonio",
          last_name: "Mark",
          email: "antmarkky@example.com",
          age: 20,
          weight: 77.5,
          height: 160,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          first_name: "Catline",
          last_name: "Suarez",
          email: "catlinesuarez12@example.com",
          age: 25,
          weight: 98.2,
          height: 188,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          first_name: "Peter",
          last_name: "Cabbage",
          email: "petercab@example.com",
          age: 26,
          weight: 87.9,
          height: 181,
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
