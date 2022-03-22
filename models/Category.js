const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
      // define an id column
    id: {
    type: DataTypes.INTEGER,
    allowNull: false,
   // instruct that this is the Primary Key
    primaryKey: true,
  // turn on auto increment
     autoIncrement: true
 },
  // category name column
  category_name: {
   type: DataTypes.STRING,
   allowNull: false
  },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
