const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

class Skills extends Model {}

Skills.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    skills:{
        type:DataTypes.STRING,
        allowNull:false
    }
  },
  {
    sequelize,
    tableName: "skills",
    createdAt: "created_at",
    updatedAt: "updated_at",
    freezeTableName: true,
  }
);

module.exports = Skills;