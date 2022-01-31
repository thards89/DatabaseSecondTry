const User = require("./models").user;
const { Op } = require("sequelize");

async function getAllUsers() {
  try {
    const allUsers = await User.findAll({ raw: true });
    // const specificUser = await User.findOne({ where: { name: "Dave" } });
    // const userByPk = await User.findByPk(4); //filter by primary key
    return userByPk;
  } catch (e) {
    console.log(e);
  }
}

getAllUsers().then((users) => console.log(users));

// const tallUsers = await User.findAll({
//     // WHERE height >= 175
//     where: {
//       height: {
//         [Op.gte]: 175, // gte stands for 'greater than or equal'
