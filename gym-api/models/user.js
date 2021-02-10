'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // User.belongsTo(models.Gym, {
      //   foreignKey: 'gym'
      // })
    }
  };
  User.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    admin: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    gym: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};