const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

class Cotegory extends Model {}

Cotegory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
  },
  {
    sequelize,
    tableName: "Cotegory",
    createdAt: "created_at",
    updatedAt: "updated_at",
    freezeTableName: true,
  }
);

module.exports = Cotegory;