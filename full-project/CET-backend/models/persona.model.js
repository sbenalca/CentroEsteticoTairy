module.exports = (sequelize, DataTypes) => {
    const Persona = sequelize.define("persona",{
        idpersona:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre : {
            type: DataTypes.STRING
        },
        apellido : {
            type: DataTypes.STRING
        },
        direccion : {
            type: DataTypes.STRING
        },
        correo : {
            type: DataTypes.STRING
        },
        telefono: {
            type: DataTypes.STRING
        }
    },
    {
        tableName: 'persona',
        timestamps: false
    });
    return Persona;
};