import { Table, Column, Model, HasMany, ForeignKey, BelongsTo, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { User } from './user';

@Table({
    underscored: true,
    tableName: 'user_auths'
})

export class UserAuth extends Model<UserAuth> {
    @Column
    hash: string;

    @ForeignKey(() => User)
    @Column({field: 'user_id'})
    userId: number;

    @Column({field: 'auth_type'})
    authType: string;

    @Column({field: 'missed_counter'})
    missedCounter: number;

    @Column({field: 'last_missed_attempt'})
    lastMissedAttempt: Date;

    @Column({field: 'reset_hash'})
    resetHash: string;

    @Column({field: 'reset_hash_timestamp'})
    resetHashTimestamp: number;

    @CreatedAt
    @Column({field: 'created_at'})
    createdAt: Date;

    @UpdatedAt
    @Column({field: 'updated_at'})
    updatedAt: Date;
}