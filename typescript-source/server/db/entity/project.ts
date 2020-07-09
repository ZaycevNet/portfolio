import {
    BaseEntity,
    Column,
    CreateDateColumn, DeleteDateColumn, Entity,
    JoinTable,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Tag} from "./tag";
import {ProjectLink} from "./project-link";

@Entity()
export class Project extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    readonly id!: string;

    @Column({
        type: "int",
        default: 10
    })
    priority!: number;

    @Column('text')
    title!: string;

    @Column("text")
    description!: string;

    @Column({
        type: "text",
        nullable: true
    })
    preview!: string | null;

    @ManyToMany(() => Tag, tag => tag.projects, {eager: true})
    @JoinTable()
    tags!: Tag[];

    @OneToMany(() => ProjectLink, link => link.project, {eager: true})
    @JoinTable()
    links!: ProjectLink[];

    @Column("boolean")
    private!: boolean;

    @CreateDateColumn()
    readonly createdAt!: Date;

    @UpdateDateColumn()
    readonly updatedAt!: Date;

    @DeleteDateColumn()
    readonly deletedAt!: Date | null;
}