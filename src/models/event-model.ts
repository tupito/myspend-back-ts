import { DataTypes, Sequelize } from 'sequelize';
import { EventStatic } from '../types/models';

const EventFactory = function eventFactory(sequelize: Sequelize): EventStatic {
  return <EventStatic>sequelize.define('events', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    archivingidentifier: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      comment: 'arkistointitunnus',
    },
    postingdate: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: 'kirjauspäivä',
    },
    valuedate: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: 'arvopäivä',
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      comment: 'määrä',
    },
    amounttopay: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      comment: 'käyttäjän osuus maksusta',
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'laji',
    },
    legend: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: 'selitys',
    },
    receiverorpayer: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'saaja/maksaja',
    },
    accountnumber: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'saajan tilinumero ja pankin BIC',
    },
    reference: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'viite',
    },
    message: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      comment: 'viesti',
    },
    owncomment: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
    visa: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    subcategoryid: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
