import { Request, Response } from "express-serve-static-core";
import { NextFunction } from "express-serve-static-core";
import * as gymService  from '../services/gyms';
import { APIResponse } from "./response";
import { ValidRequest } from "../data_types/valid_request";

export async function getGymList(req: ValidRequest, res: Response, next: NextFunction) {
    try {
        const gyms = await gymService.getGymList(req.validInput.search);

        res
        .status(200)
        .send(APIResponse.success(gyms))
        .end();
    } catch(err) {
        next(err);
    }
}

export async function getCoachesByGym(req: ValidRequest, res: Response, next: NextFunction) {
    try {
        const gyms = await gymService.getCoachList(req.validInput.gymId);

        res
        .status(200)
        .send(APIResponse.success(gyms))
        .end();
    } catch(err) {
        next(err);
    }
}