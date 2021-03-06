module.exports = (sequelize, DataType) => {
    const Cliente = sequelize.define('Cliente', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nome: DataType.STRING,

        sobrenome: DataType.STRING,

        data_nascimento: DataType.DATE,

        cep: DataType.STRING,

        telefone: DataType.STRING,

        email: DataType.STRING,

        senha: DataType.STRING,

        cpf: DataType.STRING,
    },
    {
        tableName: 'clientes',
        timestamps: false
    })

    Cliente.associate = (models) => {
        Cliente.belongsToMany(models.Profissional, {
            foreignKey: 'cliente_id',
            otherKey: 'profissional_id',
            through: models.ClienteHasProfissional
        })
    }

    return Cliente;
}