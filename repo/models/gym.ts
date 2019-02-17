import { DataType, Table, Column, Model, HasMany, CreatedAt, UpdatedAt, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Area } from './area';
import { CoachGyms } from './coach_gyms';

@Table({
    underscored: true,
    tableName: 'gyms',
    timestamps: true
})
export class Gym extends Model<Gym> {
    @PrimaryKey
    @AutoIncrement
    @Column({field: 'id'})
    id: number;

    @Column(DataType.STRING(32))
    name: string;
    
    @Column
    address: string;

    @Column
    image: string;

    @Column
    website: string;

    @ForeignKey(() => Area)
    @Column({field: 'area_id'})
    areaId: number;

    @BelongsTo(() => Area)
    area: Area;

    @HasMany(() => CoachGyms)
    coachGyms: CoachGyms[]

    @CreatedAt
    @Column({field: 'created_at'})
    createdAt: Date;

    @UpdatedAt
    @Column({field: 'updated_at'})
    updatedAt: Date;
}