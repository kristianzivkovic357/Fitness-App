import { Request } from "express-serve-static-core";
import { AuthenticationError } from "../utils/errors";

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