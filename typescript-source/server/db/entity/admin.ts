import {
    BaseEntity, BeforeInsert,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    Index, OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import md5 from 'md5';
import {Session} from "./session";

@Entity()
export class Admin extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    readonly id!: string;

    @Column({
        type: "text",
        nullable: false,
        length: 64
    })
    name!: string;

    @Column({
        type: "text",
        nullable: false,
        length: 64
    })
    @Index()
    login!: string;

    @Column({
        type: "text",
        nullable: false,
        length: 32
    })
    password!: string;

    @OneToMany(() => Session, session => session.admin)
    sessions!: Promise<Session[]>;

    @CreateDateColumn()
    readonly createdAt!: Date;

    @UpdateDateColumn()
    readonly updatedAt!: Date;

    @DeleteDateColumn()
    readonly deletedAt!: Date | null;

    @BeforeInsert()
    trimValues(){
        this.login = this.login.trim();
        this.name = this.name.trim();
        this.password = this.password.trim();
    }

    @BeforeInsert()
    loginToLowerCase(){
        this.login = this.login.toLowerCase()
    }

    @BeforeInsert()
    hashPassword(){
        this.password = md5(this.password);
    }
}