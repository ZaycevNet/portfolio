import {
    BaseEntity,
    Column,
    CreateDateColumn, DeleteDateColumn,
    Entity, JoinTable,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Admin} from "./admin";
import moment from "moment-timezone";

@Entity()
export class Session extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column("simple-json")
    headers!: object;

    @ManyToOne(() => Admin, admin => admin.sessions, {eager: true})
    @JoinTable()
    admin!: Admin;

    @CreateDateColumn()
    readonly createdAt!: Date;

    get expiredAt(){
        return moment(this.createdAt).add(8, "hours").format();
    }

    @UpdateDateColumn()
    readonly updatedAt!: Date;

    @DeleteDateColumn()
    readonly deletedAt!: Date | null;

    expired(){
        return moment().isAfter(this.expiredAt);
    }
}