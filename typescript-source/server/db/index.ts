import "reflect-metadata";
import {createConnection, getConnectionManager, getConnectionOptions} from "typeorm";
import {Admin} from "./entity/admin";
import {Opportunity} from "./entity/opportunity";
import {Tag} from "./entity/tag";
import {Project} from "./entity/project";
import {ProjectLink} from "./entity/project-link";
import path from 'path';
import {Session} from "./entity/session";
import {Comment} from "./entity/comment";
import {History} from './entity/history';
import {SiteContentText} from "./entity/site-content-text";
import {Request} from './entity/request';
import {SocialLink} from "./entity/social-link";

export const UseDatabase = () => (t: any, p: string, d: PropertyDescriptor): PropertyDescriptor => {
    const handler = d.value;

    return {
        ...d,
        value: async (...args: any[]) => {
            await connection();

            return await handler(...args);
        }
    };
};

export const connection = async () => {
    try {
        return getConnectionManager().get('default');
    } catch (e) {
        return await createConnection({
            type: 'sqlite',
            database: path.join(process.cwd(), './database.sqlite'),
            synchronize: true,
            logging: false,
            entities: [
                Admin,
                Comment,
                History,
                Opportunity,
                Tag,
                ProjectLink,
                Project,
                Session,
                SiteContentText,
                Request,
                SocialLink
            ]
        });
    }
};