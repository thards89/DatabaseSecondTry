module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "Water Plants",
          deadline: "0101021",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Feed the dog",
          deadline: "0101021",
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
