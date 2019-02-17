import { DataType, Table, Column, Model, HasMany, CreatedAt, UpdatedAt, PrimaryKey, AutoIncrement, HasOne, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Country } from './country';
import { City } from './city';

@Table({
    underscored: true,
    tableName: 'areas',
    timestamps: true
})
export class Area extends Model<Area> {
    @PrimaryKey
    @AutoIncrement
    @Column({field: 'id'})
    id: number;

    @Column(DataType.STRING(64))
    name: string;

    @ForeignKey(() => City)
    @Column({field: 'city_id'})
    userId: number;

    @BelongsTo(() => City)
    city: City

    @CreatedAt
    @Column({field: 'created_at'})
    createdAt: Date;

    @UpdatedAt
    @Column({field: 'updated_at'})
    updatedAt: Date;
}