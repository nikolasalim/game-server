const Sequelize = require("sequelize");
const baseUrl =
  process.env.DATABASE_URL ||
  "postgres://postgres:secret@localhost:5432/postgres";

const db = new Sequelize(baseUrl);

db.sync()
  .then(() => console.log("Database is synced!"))
  .catch(error => console.error(error));

module.exports = db;
