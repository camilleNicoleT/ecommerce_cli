const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id'
      }
  },
    tag_id:{
          // use the special Sequelize DataTypes object provide what type of data it is
     type: DataTypes.INTEGER,
        // this is the equivalent of SQL's `NOT NULL` option
        references: {
          model: 'tag',
          key: 'id',
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
