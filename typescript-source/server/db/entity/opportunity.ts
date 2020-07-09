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
export class Opportunity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    readonly id!: string;

    @Column({
        type: 'text',
        length: 64
    })
    icon!: string;

    @Column({
        type: 'text',
        length: 128
    })
    title!: string;

    @Column({
        type: 'text',
    })
    description!: string;

    @CreateDateColumn()
    readonly createdAt!: Date;

    @UpdateDateColumn()
    readonly updatedAt!: Date;

    @DeleteDateColumn()
    readonly deletedAt!: Date | null
}
