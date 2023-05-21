module.exports = (sequelize, DataTypes)=>{
    const Usuario = sequelize.define('Usuario',{
            nome: DataTypes.STRING,
            usuario: DataTypes.STRING,
            senha: DataTypes.STRING,
            email: DataTypes.STRING,
            email_secundario: DataTypes.STRING,
        }, {});
        Usuario.associate = (models)=>{
            Usuario.hasMany(models.Comentario);
        }
        Usuario.associate = (models)=>{
            Usuario.hasMany(models.AreaProf);
        }      

        return Usuario;
}
