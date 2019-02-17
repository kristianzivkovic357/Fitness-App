import { DataType, Table, Column, Model, HasMany, CreatedAt, UpdatedAt, PrimaryKey, AutoIncrement, HasOne, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Country } from './country';
import { Area } from './area';
import { User } from './user';
import { Gym } from './gym';

@Table({
    underscored: true,
    tableName: 'coach_gyms',
    timestamps: true
})
export class CoachGyms extends Model<CoachGyms> {

    @PrimaryKey
    @ForeignKey(() => User)
    @Column({field: 'coach_id'})
    coachId: number;

    @PrimaryKey
    @ForeignKey(() => Gym)
    @Column({field: 'gym_id'})
    gymId: number;

    @BelongsTo(() => User)
    coach: User

    @BelongsTo(() => Gym)
    gym: Gym

    @CreatedAt
    @Column({field: 'created_at'})
    createdAt: Date;

    @UpdatedAt
    @Column({field: 'updated_at'})
    updatedAt: Date;
}