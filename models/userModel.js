module.exports = (Sequelize, sequelize, DataTypes) => {
    return sequelize.define(
      "userModel",
      {
        ...require("./cors")(Sequelize, DataTypes),
        
        name: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
      },
  
      {
        tableName: "userModel",
      }
    );
  };
  