import {
    BaseEntity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    Index,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";

export enum HistorySource {
    Work,
    Education
}

@Entity()
export class History extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    readonly id!: string;

    @Column({
        type: "simple-enum",
        enum: HistorySource
    })
    @Index()
    source!: HistorySource;

    @Column("datetime")
    startDate!: Date;

    @Column({
        type: "datetime",
        nullable: true
    })
    endDate!: Date | null;

    @Column("text")
    vector!: string;

    @Column("text")
    place!: string;

    @CreateDateColumn()
    readonly createdAt!: Date;

    @UpdateDateColumn()
    readonly updatedAt!: Date;

    @DeleteDateColumn()
    readonly deletedAt!: Date | null;
}