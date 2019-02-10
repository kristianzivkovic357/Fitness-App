import { Request, RequestHandler } from 'express';


export class BaseInput {
    req: Request;
    groups?: string[];
    constructor(req: Request) {
        this.req = req;
    }
}

