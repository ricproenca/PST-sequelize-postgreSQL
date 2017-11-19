"use strict";
module.exports = (sequelize, DataTypes) => {
  const institution = sequelize.define("institution", {
    institution: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comments: DataTypes.STRING
  });
  return institution;
};
