module.exports = (sequelize, DataTypes) => {
    const TipoServicio = sequelize.define("tiposervicio",{
        idtiposervicio:{
            type: DataTypes.STRING,
            primaryKey: true
        },
        nombre : {
            type: DataTypes.STRING
        },
        descripcion : {
            type: DataTypes.STRING
        },
        idarea : {
            type: DataTypes.STRING
        },
    },
    {
        tableName: 'tiposervicio',
        timestamps: false
    });
    return TipoServicio;
};