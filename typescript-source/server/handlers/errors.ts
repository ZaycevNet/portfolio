import {BaseError} from "@za-utils/next-decorators";

export class NonAuthorizedOnlyError extends BaseError {
    constructor(message: string = 'Access denied. Already authorized.') {
        super(message);

        this.name = 'NonAuthorizedOnlyError';
        this.message = message;
        this.statusCode = 403;
    }
}

export class NotFoundError extends BaseError {
    constructor(message: string) {
        super(message);

        this.name = 'NotFoundError';
        this.message = message;
        this.statusCode = 404;
    }
}