module.exports = (sequelize, DataTypes) => {
    const Servicio = sequelize.define("servicio",{
        idservicio:{
            type: DataTypes.STRING,
            primaryKey: true
        },
        nombre : {
            type: DataTypes.STRING
        },
        costo : {
            type: DataTypes.STRING
        },
        maquina : {
            type: DataTypes.STRING
        },
        idtiposervicio : {
            type: DataTypes.STRING
        },
    },
    {
        tableName: 'servicio',
        timestamps: false
    });
    return Servicio;
};