const { sequelize } = require("./model");

module.exports = (sequelize, DataTypes) => {
    const Persona = sequelize.define("persona",{
        idpersona:{
            type: DataTypes.STRING
        },
        nombre : {
            type: DataTypes.STRING
        }

    });
    return Persona;
};