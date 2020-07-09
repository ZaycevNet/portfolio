import {
    AfterInsert,
    BaseEntity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import TelegramBot from 'node-telegram-bot-api';

@Entity()
export class Request extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    readonly id!: string;

    @Column("text")
    email!: string;

    @Column("text")
    name!: string;

    @Column("text")
    message!: string;

    @Column({
        type: "boolean",
        default: false
    })
    isRead!: boolean;

    @CreateDateColumn()
    readonly createdAt!: Date;

    @UpdateDateColumn()
    readonly updatedAt!: Date;

    @DeleteDateColumn()
    readonly deletedAt!: Date | null;

    @AfterInsert()
    async sendToTelegram(){
        if(process.env.TELEGRAM_TOKEN && process.env.TELEGRAM_CHATID){
            const tb = new TelegramBot(process.env.TELEGRAM_TOKEN, {polling: false});

            await tb.sendMessage(process.env.TELEGRAM_CHATID, `${this.name}\n${this.email}\n\n${this.message}`);
        }
    }
}