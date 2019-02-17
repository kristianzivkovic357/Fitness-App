import { Request, NextFunction } from "express-serve-static-core";
import { AuthenticationError, AuthorizationError } from "../utils/errors";
import { ValidRequest } from "../data_types/valid_request";
import { runInNewContext } from "vm";
import { Response } from "express-serve-static-core";

const STATE_AUTHENTICATED = 1;
export async function setAuthenticated(req: Request, sessionProps) {
    if (sessionProps) {
      req.session.user = sessionProps;
      req.session.state = STATE_AUTHENTICATED
    }
    console.log(sessionProps)
}

export function getSession(req: Request) {
  if(req.session.state === STATE_AUTHENTICATED && req.session.user) {
    return req.session.user;
  } else {
    throw new AuthenticationError();
  }
}

export function isAutheticated(req: ValidRequest, res: Response, next: NextFunction) {
  if (req.session.state === STATE_AUTHENTICATED) {
    return next()
  }

  next(new AuthenticationError())
}

export function isAuthorized(req: ValidRequest, res: Response, next: NextFunction) {
  if (req.session.user && +req.params.id === req.session.user.id) {
    return next()
  }

  next(new AuthorizationError());
}