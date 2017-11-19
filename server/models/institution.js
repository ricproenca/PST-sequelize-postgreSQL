"use strict";
module.exports = (sequelize, DataTypes) => {
  var institution = sequelize.define(
    "institution",
    {
      institution: {
        type: DataTypes.STRING,
        allowNull: false
      },
      comments: DataTypes.STRING
    },
    {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    }
  );
  return institution;
};
