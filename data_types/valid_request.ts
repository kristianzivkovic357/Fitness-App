import { Request, Response, Router, NextFunction } from 'express';

export interface ValidRequest extends Request {
    validInput: any;
}