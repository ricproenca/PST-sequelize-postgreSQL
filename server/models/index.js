// use environment vars
const dotenv = require("dotenv").config();

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || "development";
const config = require(`${__dirname}/../config/config.json`)[env];
const db = {};

let sequelize;

// Db is hosted in the cloud
if (config.use_env_variable) {
  // Extract the key provided in config[use_env_variable] to establish a connection to our db.
  sequelize = new Sequelize(process.env[config.use_env_variable], {
    dialect: config.dialect
  });
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

// Read our models folder, discovering and importing all the models
fs
  .readdirSync(__dirname)
  .filter(
    file =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach(file => {
    // Adding models to db object
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

// Applying relationships between the models.
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
