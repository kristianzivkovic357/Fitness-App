
import { ValidationError } from 'class-validator';


class AuthenticationError extends Error {}

class AuthorizationError extends Error {}

class NotFoundError extends Error {}

class ConflictError extends Error {}

class CustomValidationError extends Error {
    err: ValidationError[];

    constructor(err: ValidationError[]) {
        super();
        this.err = err;
    }

    mapped() {
        const error = {};
        for (const i in this.err) {
            error[this.err[i].property] = {
                value: this.err[i].value,
                param: this.err[i].property,
                keys: Object.keys(this.err[i].constraints).map(key => this.err[i].constraints[key])
            };
        }

        return error;
    }
}

class InvalidRequestError extends Error{}

class ServiceUnavailableError extends Error{}

export {
    AuthenticationError,
    AuthorizationError,
    ValidationError,
    NotFoundError,
    CustomValidationError,
    ConflictError,
    InvalidRequestError,
    ServiceUnavailableError
};