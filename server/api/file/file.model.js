'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('File', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    fileName: DataTypes.STRING,
    mimetype: DataTypes.STRING,
    path: DataTypes.STRING
  });
};
