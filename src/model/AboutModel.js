const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

class About extends Model {}

About.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    aboutme:{
        type:DataTypes.STRING,
        allowNull:false
    },
    firstname:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lastname:{
        type:DataTypes.STRING,
        allowNull:false
    },
    birthday:{
      type:DataTypes.STRING,
      allowNull:false
    },
    notionality:{
      type:DataTypes.STRING,
      allowNull:false
    },
    freelance:{
      type:DataTypes.STRING,
      allowNull:false
    },
    phone:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    address:{
      type:DataTypes.STRING,
      allowNull:false
    },
    email:{
      type:DataTypes.STRING,
      allowNull:false
    },
    language:{
      type:DataTypes.STRING,
      allowNull:false
    },
    github:{
      type:DataTypes.STRING,
      allowNull:false
    }
  },
  {
    sequelize,
    tableName: "about",
    createdAt: "created_at",
    updatedAt: "updated_at",
    freezeTableName: true,
  }
);

module.exports = About;