import { DataType, Table, Column, Model, HasMany, CreatedAt, UpdatedAt, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table({
    underscored: true,
    tableName: 'users',
    timestamps: true
})
export class User extends Model<User> {
    @PrimaryKey
    @AutoIncrement
    @Column({field: 'id'})
    id: number;

    @Column(DataType.STRING(32))
    name: string;

    @Column
    email: string;

    @Column({field: 'is_coach'})
    isCoach: boolean;

    @Column
    description: string;

    @CreatedAt
    @Column({field: 'created_at'})
    createdAt: Date;

    @UpdatedAt
    @Column({field: 'updated_at'})
    updatedAt: Date;
}