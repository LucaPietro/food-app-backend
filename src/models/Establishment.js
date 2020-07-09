const { Model, DataTypes } = require('sequelize');

class Establishment extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        city: DataTypes.STRING,
        uf: DataTypes.STRING(2),
        telephone: DataTypes.STRING,
        whatsapp: DataTypes.STRING,
      },
      {
        sequelize,
      },
    );
  }

  static associate(models) {
    this.hasMany(models.Item, { foreignKey: 'establishment_id', as: 'items' });
    this.belongsToMany(models.Segment, {
      foreignKey: 'establishment_id',
      through: 'establishments_segments',
      as: 'segments',
    });
  }
}

module.exports = Establishment;
