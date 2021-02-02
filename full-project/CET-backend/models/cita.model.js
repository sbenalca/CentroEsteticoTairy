module.exports = (sequelize, DataTypes) => {
    const Cita = sequelize.define("cita",{
        idcita:{
            type: DataTypes.STRING,
            primaryKey: true
        },
        fecha : {
            type: DataTypes.STRING
        },
        idusuario : {
            type: DataTypes.STRING
        },
        idservicio : {
            type: DataTypes.STRING
        },
    },
    {
        tableName: 'cita',
        timestamps: false
    });
    return Cita;
};