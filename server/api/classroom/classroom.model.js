'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('Classroom', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    currentPage: DataTypes.INTEGER,
  });
}
