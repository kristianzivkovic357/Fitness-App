
import logger from '../utils/logger';

import {
    AuthenticationError,
    AuthorizationError,
    ValidationError,
    NotFoundError,
    CustomValidationError,
    ConflictError,
    InvalidRequestError,
    ServiceUnavailableError
} from '../utils/errors';
import { Request, Response, NextFunction } from 'express';
import { APIResponse } from '../utils/response';

const { NODE_ENV } = process.env;

function error (err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof AuthenticationError) {
      res.status(401).json(APIResponse.error(401, 'Unauthorized'));
    } else if (err instanceof AuthorizationError) {
      res.status(403).json(APIResponse.error(403, 'Forbidden'));
    } else if (err instanceof CustomValidationError) {
      res.status(422).json(APIResponse.error(422, 'Validation Error', err.mapped()));
    } else if (err instanceof NotFoundError) {
      res.status(404).json(APIResponse.error(404, 'Not found'));
    } else if (err instanceof ConflictError) {
      res.status(409).json(APIResponse.error(409, 'Conflict Error'));
    } else if (err instanceof InvalidRequestError) {
      res.status(400).json(APIResponse.error(400, 'Bad Request'));
    } else if (err instanceof ServiceUnavailableError) {
      res.status(503).json(APIResponse.error(503, 'Service Unavailable'));
    } else {
      logger.error(err.stack);

      const status = 500;
      const message = (NODE_ENV === 'development') ? err.message : 'Error';
      res.status(status).send(message).end();
    }
}

function ok (req: Request, res: Response, next: NextFunction) {
  res.status(200).end();
}

  export {
      error,
      ok
  };