module.exports = (sequelize, DataTypes) => {
    const ServicioPromocion = sequelize.define("serviciopromocion",{
        idserviciopromocion:{
            type: DataTypes.STRING,
            primaryKey: true
        },
        idservicio : {
            type: DataTypes.STRING
        },
        idpromocion : {
            type: DataTypes.STRING
        }
    },
    {
        tableName: 'serviciopromocion',
        timestamps: false
    });
    return ServicioPromocion;
};