const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");

class Match extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  match_request_from: {
    type: DataTypes.INTEGER,
    references: {
      model: "user",
      key: "id",
    },
  },

  match_request_to: {
    type: DataTypes.INTEGER,
    references: {
      model: "user",
      key: "id",
    },
  },

  matched: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    default: 0,
  },

  accepted_date: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW,
  },
};

const options = {
  sequelize: connection,
  modelName: "match",
  freezeTableName: true,
  timestamps: true,
  underscored: true,
};

Match.init(schema, options);

module.exports = Match;
