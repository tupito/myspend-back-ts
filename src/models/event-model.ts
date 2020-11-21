import { DataTypes, Sequelize } from 'sequelize';
import { EventStatic } from '../types/models';

const EventFactory = function eventFactory(sequelize: Sequelize): EventStatic {
  return <EventStatic>sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    archivingidentifier: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  });
};

export default EventFactory;
