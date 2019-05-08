'use strict';
module.exports = (sequelize, DataTypes) => {
  const Own = sequelize.define('Own', {
    userid: DataTypes.STRING,
    bookid: DataTypes.STRING,
    booktitle: DataTypes.STRING,
    bookurl: DataTypes.STRING
  }, {});
  Own.associate = function(models) {
    // associations can be defined here
  };
  return Own;
};