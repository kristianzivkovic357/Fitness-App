import { AuthenticationError, InvalidRequestError, NotFoundError, ConflictError } from "../utils/errors";
import { checkPass, getSessionProperties, createUserAuth } from "./auth";
import { User } from "../repo/models/user";
import bodyParser = require("body-parser");
import { Gym } from "../repo/models/gym";

import { Op } from 'sequelize';
import { CoachGyms } from "../repo/models/coach_gyms";

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

export async function addCoachToGym(userId: number, gymIds: number[]) {
    const ok = await isCoach(userId);
    if(!ok) {
        throw new NotFoundError();
    }

    const gymsFound = await gymsExist(gymIds);
    if(gymsFound !== gymIds.length) {
        throw new NotFoundError();
    }

    const objects = [];
    for(const i in gymIds) {
        objects.push(createGymCoachObj(userId, gymIds[i]));
    }
    try {
    await CoachGyms.bulkCreate(objects);
    } catch(err) {
        throw new ConflictError()
    }
}

function createGymCoachObj(userId: number, gymId: number) {
    return {
        coachId: userId,
        gymId: gymId
    }
}

async function isCoach(userId: number) {
    return User.count({
        where: {
            id: userId,
            isCoach: true
        }
    })
}

async function gymsExist(ids: number[]) {
    return Gym.count({
        where: {
            id: {
                [Op.in]: ids
            }
        }
    });
}