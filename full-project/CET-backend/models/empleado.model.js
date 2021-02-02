module.exports = (sequelize, DataTypes) => {
    const Empleado = sequelize.define("empleado",{
        idempleado:{
            type: DataTypes.STRING,
            primaryKey: true
        },
        cedula : {
            type: DataTypes.STRING
        },
        idpersona : {
            type: DataTypes.STRING
        },
        idarea : {
            type: DataTypes.STRING
        },
    },
    {
        tableName: 'empleado',
        timestamps: false
    });
    return Empleado;
};