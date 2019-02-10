import { Router } from 'express';
import * as morgan from 'morgan';
import * as cors from 'cors';
import { error } from './handler';
import { session } from './session';
import { login, register, me, logout } from './users';
import { LoginInput, RegisterInput } from './validator_params/auth';
import * as val from './validators';
const {
    WEBAPP_BASE_URL
} = process.env;
const baseUrl = '/api/v1'

const router = Router();

router.use(session);
router.use(morgan('dev'));
router.use(cors({
'origin': function (origin, callback) {
    return callback(null, true);
  },
'credentials': true,
'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'})
);


router.post(`${baseUrl}/login`, val.handle(LoginInput), login)
router.post(`${baseUrl}/register`, val.handle(RegisterInput), register)
router.post(`${baseUrl}/users/me`, me)
router.post(`${baseUrl}/users/logout`, logout)


router.use(error);

export default router;
