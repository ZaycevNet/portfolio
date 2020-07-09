import {
    BaseEntity,
    Column,
    CreateDateColumn,
    DeleteDateColumn, Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Project} from "./project";

@Entity()
export class ProjectLink extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    readonly id!: string;

    @Column("text")
    title!: string;

    @Column("text")
    source!: string;

    @ManyToOne(() => Project, project => project.links)
    project!: Promise<Project>;

    @CreateDateColumn()
    readonly createdAt!: Date;

    @UpdateDateColumn()
    readonly updatedAt!: Date;

    @DeleteDateColumn()
    readonly deletedAt!: Date | null;
}