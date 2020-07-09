const { Model, DataTypes } = require('sequelize');

class Item extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        value: DataTypes.DECIMAL(13, 2),
      },
      {
        sequelize,
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Establishment, {
      foreignKey: 'establishment_id',
      as: 'establishments',
    });
  }
}

module.exports = Item;
