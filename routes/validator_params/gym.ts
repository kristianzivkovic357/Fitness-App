import { BaseInput } from "./base_input";
import { IsEmail, IsNotEmpty, IsString, IsNumberString, IsArray } from "class-validator";
import { Request } from "express-serve-static-core";
import { ToInt } from "@hollowverse/class-sanitizer";
import { IsNumberArray } from "./custom";

export class GymSearch extends BaseInput {
    search: string
  
    constructor(req: Request) {
      super(req);
      this.search = req.query.search;
    }
}

export class AddCoachToGym extends BaseInput {
    @ToInt()
    @IsNumberString({message: 'error_code.register_coach_gyms_screen.coach_id_invalid'})
    userId: number;
    
    @IsNumberArray({message: 'error_code.register_coach_gyms_screen.gym_ids_invalid'})
    gymIds: number[];

    constructor(req: Request) {
        super(req);
        this.userId = req.params.id;
        this.gymIds = req.body.gyms;
      }
}

export class GetCoachesByGym extends BaseInput {
    @ToInt()
    @IsNumberString({message: 'error_code.find_coaches_screen.gym_id_invalid'})
    gymId: number;

    constructor(req: Request) {
        super(req);
        this.gymId = req.params.id;
      }
}