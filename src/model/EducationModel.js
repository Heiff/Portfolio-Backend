const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

class Education extends Model {}

Education.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    from:{
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
    tableName: "education",
    createdAt: "created_at",
    updatedAt: "updated_at",
    freezeTableName: true,
  }
);

module.exports = Education;