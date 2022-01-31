const User = require("./models").user;
const { Op } = require("sequelize");

async function getAllUsers() {
  try {
    const result = await Project.findAndCountAll({
      where: {
        title: {
          [Sequelize.Op.like]: "foo%",
        },
      },
      offset: 10,
      limit: 2,
    });

    console.log(result.count);
    console.log(result.rows);
  } catch (e) {
    console.error(e);
  }
}

getAllUsers().then((users) => console.log(users));
