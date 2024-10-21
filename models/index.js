
const Sequelize = require("sequelize");
const postMultipleData = require("./postMultipleData");
const sequelize = require("../dbconnection").sequelize;
module.exports = {
  userModel: require("./userModel")(Sequelize, sequelize, Sequelize.DataTypes),
  postModel: require("./postModel")(Sequelize, sequelize, Sequelize.DataTypes),
  postMultipleData: require("./postMultipleData")(Sequelize, sequelize, Sequelize.DataTypes),
  
};
