const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const { v4: uuidv4 } = require('uuid');

class NotaFiscal extends Model { }

NotaFiscal.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: uuidv4()
  },
  nome_cliente: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cpf_cliente: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nome_fornecedor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cnpj_fornecedor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nome_produto: {
    type: DataTypes.STRING,
    allowNull: false
  },
  quantidade_produto: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_venda: {
    type: DataTypes.UUID,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'nota_fiscal',
  tableName: 'nota_fiscal'
});

module.exports = NotaFiscal;