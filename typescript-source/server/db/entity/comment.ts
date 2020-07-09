import {
    BaseEntity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";

@Entity()
export class Comment extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    readonly id!: string;

    @Column({
        type: "int",
        default: 10
    })
    priority!: number;

    @Column("text")
    from!: string;

    @Column({
        type: "text",
        nullable: true
    })
    company!: string | null;

    @Column({
        type: "text",
        nullable: true
    })
    avatar!: string | null;

    @Column("text")
    comment!: string;

    @CreateDateColumn()
    readonly createdAt!: Date;

    @UpdateDateColumn()
    readonly updatedAt!: Date;

    @DeleteDateColumn()
    readonly deletedAt!: Date | null;
}