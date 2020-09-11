'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Tracking);
    }
  };
  User.init({
    nome: DataTypes.STRING,
    user: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    foto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};