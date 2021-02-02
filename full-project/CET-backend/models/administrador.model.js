module.exports = (sequelize, DataTypes) => {
    const Administrador = sequelize.define("administrador",{
        idadmin:{
            type: DataTypes.STRING,
            primaryKey: true
        },
        contrasena : {
            type: DataTypes.STRING
        },
        cedula : {
            type: DataTypes.STRING
        },
        idpersona : {
            type: DataTypes.STRING
        },
    },
    {
        tableName: 'administrador',
        timestamps: false
    });
    return Administrador;
};