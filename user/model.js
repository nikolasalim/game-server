const db = require("../db");
const Sequelize = require("sequelize");

const User = db.define(
  "user",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  { timestamps: false }
);

module.exports = User;
