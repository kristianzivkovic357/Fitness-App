import { DataType, Table, Column, Model, HasMany, CreatedAt, UpdatedAt, PrimaryKey, AutoIncrement, HasOne, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Country } from './country';
import { Area } from './area';

@Table({
    underscored: true,
    tableName: 'cities',
    timestamps: true
})
export class City extends Model<City> {
    @PrimaryKey
    @AutoIncrement
    @Column({field: 'id'})
    id: number;

    @Column(DataType.STRING(64))
    name: string;

    @ForeignKey(() => Country)
    @Column({field: 'country_id'})
    userId: number;

    @BelongsTo(() => Country)
    country: Country

    @HasOne(() => Area)
    area: Area;

    @CreatedAt
    @Column({field: 'created_at'})
    createdAt: Date;

    @UpdatedAt
    @Column({field: 'updated_at'})
    updatedAt: Date;
}