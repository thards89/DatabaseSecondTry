module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoLists",
      [
        {
          name: "Leo Messi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dan Abramov",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Aida Bugg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Peg Legge",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Olive Yew",
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
