import { Request, Response, NextFunction } from "express-serve-static-core";
import * as userServices from '../services/users';
import * as auth from './auth';
import { APIResponse } from "../utils/response";
import { ConflictError } from "../utils/errors";
import { ValidRequest } from "../data_types/valid_request";


export async function login(req: ValidRequest, res: Response, next: NextFunction) {
    try {
        const data = await userServices.login(req.validInput.email, req.validInput.password);
        auth.setAuthenticated(req, data);

        res
            .status(200)
            .send(APIResponse.success(data))
            .end();
    } catch (err) {
        next(err);
    }
};

export async function register(req: ValidRequest, res: Response, next: NextFunction) {
    try {
        const userExists = await userServices.getUser(req.body.email);
        if(userExists) {
            throw new ConflictError();
        }


        const data = await userServices.register(req.body.email, req.body);
        auth.setAuthenticated(req, data);

        res
            .status(200)
            .send(APIResponse.success(data))
            .end();
    } catch (err) {
        next(err);
    }
};

export async function me(req: ValidRequest, res: Response, next: NextFunction) {
    try {
        const data = auth.getSession(req);

        res
            .status(200)
            .send(APIResponse.success(data))
            .end();
    } catch (err) {
        next(err);
    }
};

export async function logout(req: ValidRequest, res: Response, next: NextFunction) {
    try {
        req.session.destroy(() => {});

        res
            .status(200)
            .end();
    } catch (err) {
        next(err);
    }
};

export async function getCoachList(req: ValidRequest, res: Response, next: NextFunction) {
    try {
        const coachList = await userServices.getCoachList();
        
        res
            .status(200)
            .send(APIResponse.success(coachList))
            .end();
    } catch (err) {
        next(err);
    }
};

