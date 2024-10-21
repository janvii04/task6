
module.exports = (Sequelize, sequelize, DataTypes) => {
    return sequelize.define(
        "post",
        {
            ...require("./cors")(Sequelize, DataTypes),
          
            post: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            userId: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: "user",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
        },
        {
            tableName: "post",
        }
    );
  };
  