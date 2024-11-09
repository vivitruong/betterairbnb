'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate(models) {
      Image.belongsTo(models.Room, { foreignKey: 'roomId' })
      Image.belongsTo(models.Review, { foreignKey: 'reviewId' })
      Image.belongsTo(models.User, { foreignKey: 'userId' })
    }
  }
  Image.init({
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    reviewId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Reviews',
        key: 'id'
      }
    },
    roomId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Rooms',
        key: 'id'
      }
    },
    type: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};
