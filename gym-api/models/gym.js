'use strict';
const {
  Model
} = require('sequelize');
const user = require('./user');
module.exports = (sequelize, DataTypes) => {
  class Gym extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Gym.hasMany(models.User,{
      //   foreignKey:'gym'
      // })
      // Gym.belongsTo(models.City, {
      //   foreignKey: 'city'
      // })
    }
  };
  Gym.init({
    name: DataTypes.STRING,
    city: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Gym',
  });
  return Gym;
};