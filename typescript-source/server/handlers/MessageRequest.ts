import {BaseError, BodySchema, ErrorHandler, Post, Req, Request, Response} from "@za-utils/next-decorators";
import {UseDatabase} from "../db";
import {Request as RequestEntity} from '../db/entity/request';
import {getStatusText} from "http-status-codes";

export class MessageRequest {
    @Req()
    @Post()
    @UseDatabase()
    @BodySchema({
        type: 'object',
        required: ['email', 'name', 'message'],
        properties: {
            email: {
                type: 'string',
            },
            name: {
                type: 'string'
            },
            message: {
                type: 'string'
            }
        }
    })
    async CreateMessageRequest(req: Request<{body: {email: string, name: string, message: string}}>){
        const messageRequest = new RequestEntity();

        messageRequest.email = req.body.email;
        messageRequest.name = req.body.name;
        messageRequest.message = req.body.message;

        await messageRequest.save();

        return {ok: true};
    }

    @ErrorHandler()
    error(error: BaseError, req: Request, res: Response){
        if(error.statusCode < 500){
            return {
                name: getStatusText(error.statusCode),
                message: error.message,
                statusCode: error.statusCode
            };
        }

        return {
            name: getStatusText(error.statusCode),
            statusCode: error.statusCode
        };
    }
}