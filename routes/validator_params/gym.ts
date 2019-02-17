import { BaseInput } from "./base_input";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Request } from "express-serve-static-core";

export class GymSearch extends BaseInput {
    search: string
  
    constructor(req: Request) {
      super(req);
      this.search = req.query.search;
    }
  }