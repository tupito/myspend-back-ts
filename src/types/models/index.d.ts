import { Model, BuildOptions } from 'sequelize';

// columns of the table
export interface EventAttributes {
    id: number;
    archivingidentifier: string;
    createdAt?: Date;
    updatedAt?: Date;
}

// sequelize Model
export interface EventModel extends Model<EventAttributes>, EventAttributes {}

// entity
export class Event extends Model<EventModel, EventAttributes> {}
export type EventStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): EventModel;
};
