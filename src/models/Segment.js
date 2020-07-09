const { Model, DataTypes } = require('sequelize');

class Segment extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
      },
    );
  }

  static associate(models) {
    this.belongsToMany(models.Establishment, {
      foreignKey: 'segment_id',
      through: 'establishments_segments',
      as: 'establishments',
    });
  }
}

module.exports = Segment;
