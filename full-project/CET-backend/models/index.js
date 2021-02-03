const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Persona = require("./persona.model.js")(sequelize, Sequelize);
db.Empleado = require("./empleado.model.js")(sequelize,Sequelize);
db.Administrador = require("./administrador.model.js")(sequelize,Sequelize);
db.Area = require("./area.model.js")(sequelize,Sequelize);
db.Cita = require("./cita.model.js")(sequelize,Sequelize);
db.Servicio = require("./servicio.model.js")(sequelize,Sequelize);
db.TipoServicio = require("./tiposervicio.model.js")(sequelize,Sequelize);
db.Usuario = require("./usuario.model.js")(sequelize,Sequelize);

module.exports = db;