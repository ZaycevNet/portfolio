import {
    BaseEntity,
    Column,
    CreateDateColumn, DeleteDateColumn,
    Entity,
    ManyToMany, PrimaryColumn,
    UpdateDateColumn
} from "typeorm";
import {Project} from "./project";

@Entity()
export class Tag extends BaseEntity {
    @PrimaryColumn("text")
    name!: string;

    @ManyToMany(() => Project, project => project.tags)
    projects!: Promise<Project[]>;

    @CreateDateColumn()
    readonly createdAt!: Date;

    @UpdateDateColumn()
    readonly updatedAt!: Date;

    @DeleteDateColumn()
    readonly deletedAt!: Date | null;
}