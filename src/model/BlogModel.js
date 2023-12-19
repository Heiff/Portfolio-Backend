const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

class Blog extends Model {}

Blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    image:{
        type:DataTypes.STRING,
        allowNull:false
    },
    descr:{
        type:DataTypes.STRING,
        allowNull:false
    },
    date:{
        type:DataTypes.STRING,
        allowNull:false
    },
    views:{
        type:DataTypes.INTEGER,
        defaultValue:0
    },
    tags:{
        type:DataTypes.STRING,
        allowNull:false
    },
    cotegory:{
      type:DataTypes.STRING,
      allowNull:false
    }
  },
  {
    sequelize,
    tableName: "blog",
    createdAt: "created_at",
    updatedAt: "updated_at",
    freezeTableName: true,
  }
);

module.exports = Blog;