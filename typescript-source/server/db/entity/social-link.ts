import {
    BaseEntity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";

export enum SocialLinkIcon {
    MaterialIcon,
    SvgIcon,
    PngIcon
}

@Entity()
export class SocialLink extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    readonly id!: string;

    @Column({
        type: "int",
        default: 10
    })
    priority!: number;

    @Column("simple-json")
    icon!: {type: SocialLinkIcon, source: string};

    @Column("text")
    source!: string;

    @Column("text")
    href!: string;

    @CreateDateColumn()
    readonly createdAt!: Date;

    @UpdateDateColumn()
    readonly updatedAt!: Date;

    @DeleteDateColumn()
    readonly deletedAt!: Date | null;
}