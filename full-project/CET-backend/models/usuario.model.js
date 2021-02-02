module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define("usuario",{
        idusuario:{
            type: DataTypes.STRING,
            primaryKey: true
        },
        idpersona : {
            type: DataTypes.STRING
        },
    },
    {
        tableName: 'usuario',
        timestamps: false
    });
    return Usuario;
};