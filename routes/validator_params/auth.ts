import { IsEmail, IsNotEmpty, IsBoolean, IsString } from 'class-validator';
import { BaseInput } from './base_input';
import { Request } from 'express';
import { isBoolean } from 'util';


export class LoginInput extends BaseInput {
  @IsEmail(undefined, { message: 'error_code.login_screen.email_invalid' })
  email: string;

  @IsNotEmpty({ message: 'error_code.login_screen.password_required' })
  password: string;

  constructor(req: Request) {
    super(req);
    this.email = req.body.email;
    this.password = req.body.password;
  }
}

export class RegisterInput extends BaseInput {
  @IsEmail(undefined, { message: 'error_code.register_screen.email_invalid' })
  email: string;

  @IsNotEmpty({ message: 'error_code.register_screen.name_required' })
  @IsString({ message: 'error_code.register_screen.name_invalid' })
  name: string;

  @IsNotEmpty({ message: 'error_code.register_screen.password_required' })
  password: string;

  @IsBoolean({message: 'error_code.register_screen.coach_flag_required' })
  isCoach: string;

  description: string;

  constructor(req: Request) {
    super(req);
    this.email = req.body.email;
    this.password = req.body.password;
    this.isCoach = req.body.isCoach;
    this.description = req.body.description
    this.name = req.body.name;
  }
}
