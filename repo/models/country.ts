import { DataType, Table, Column, Model, HasMany, CreatedAt, UpdatedAt, PrimaryKey, AutoIncrement, HasOne } from 'sequelize-typescript';
import { City } from './city';

@Table({
    underscored: true,
    tableName: 'countries',
    timestamps: true
})
export class Country extends Model<Country> {
    @PrimaryKey
    @AutoIncrement
    @Column({field: 'id'})
    id: number;

    @HasOne(() => City)
    city: City

    @Column(DataType.STRING(64))
    name: string;

    @CreatedAt
    @Column({field: 'created_at'})
    createdAt: Date;

    @UpdatedAt
    @Column({field: 'updated_at'})
    updatedAt: Date;
}