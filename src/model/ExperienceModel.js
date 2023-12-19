const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

class Experience extends Model {}

Experience.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    field:{
        type:DataTypes.STRING,
        allowNull:false
    },
    date:{
        type:DataTypes.STRING,
        allowNull:false
    },
    descr:{
        type:DataTypes.STRING,
        allowNull:false
    }
  },
  {
    sequelize,
    tableName: "experience",
    createdAt: "created_at",
    updatedAt: "updated_at",
    freezeTableName: true,
  }
);

module.exports = Experience;