module.exports = (Sequelize, sequelize, DataTypes) => {
    return sequelize.define(
        "postMultipleData", 
        {
            ...require("./cors")(Sequelize, DataTypes),
        
        postId: {
            type:Sequelize.UUID,
            allowNull: false,
            references: {
                model: "postModel", 
                key: "id",
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
        },
        postMedia: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        tableName: "postMultipleData",
        
    });

    
};
