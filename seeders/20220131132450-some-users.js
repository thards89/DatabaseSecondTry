module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Leo Messi",
          email: "leo@messi.com",
          phone: 1234567,
          password: "test",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dan Abramov",
          email: "dan@redux.com",
          phone: 1234567,
          password: "test",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Aida Bugg",
          email: "aida@redux.com",
          phone: 1234565,
          password: "test",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Peg Legge",
          email: "peg@redux.com",
          phone: 12345666,
          password: "test",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Olive Yew",
          email: "olive@redux.com",
          phone: 1234561,
          password: "test",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
