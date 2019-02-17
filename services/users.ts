import { AuthenticationError, InvalidRequestError } from "../utils/errors";
import { checkPass, getSessionProperties, createUserAuth } from "./auth";
import { User } from "../repo/models/user";
import bodyParser = require("body-parser");

export async function login(email, password) {
    const UserModel = await getUser(email);

    if (!UserModel) {
      throw new AuthenticationError();
    }

    const ok = await checkPass(UserModel.id, password);
    if (!ok) {
      throw new AuthenticationError();
    }

    return getSessionProperties(UserModel);
}

export async function getUser(email: number): Promise<User> {
    const UserModel = await User.findOne({
      where: {
        email: email
      }
    });

    return UserModel;
}

export async function register(email, data) {

    if(data.isCoach) {
        if(!data.description) {
            throw new InvalidRequestError();
        }
    }

    const UserObj = await User.create(data);
    await createUserAuth(UserObj.id, data.password);

    return getSessionProperties(UserObj);
}

export async function getCoachList() {
    const coachList = await User.findAndCountAll({
        where: {
            isCoach: true
        }
    })

    return coachList;
}