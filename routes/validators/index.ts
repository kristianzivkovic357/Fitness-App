
import { Request, Response, NextFunction } from 'express';
import { MinLength, MaxLength, validate } from 'class-validator';
import { ValidRequest } from '../../data_types/valid_request';
import { CustomValidationError } from '../../utils/errors';
import { sanitize, Trim, Rtrim, Blacklist } from '@hollowverse/class-sanitizer';

export function handle (inputType: any) {
    return async function fetchInput(req: ValidRequest, res: Response, next: NextFunction) {
        const classObj = new inputType(req);
        const errors = await validate(classObj, {groups: inputType.groups});

        if (errors.length) {
            next(new CustomValidationError(errors));
            return;
        }

        sanitize(classObj);
        delete classObj.req;

        req.validInput = classObj;
        next();
    };
}

