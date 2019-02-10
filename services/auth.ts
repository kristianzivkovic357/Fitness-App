import { UserAuthTypes } from '../utils/enums';
import { check, createHashHex } from '../utils/hashing';
import { getSubset } from '../utils/misc';
import { User } from '../repo/models/user';
import { UserAuth } from '../repo/models/user_auth';

export const sessionAttributes = ['id', 'email', 'name', 'isCoach', 'description'];

export async function checkPass(userId: number, password: string) {
    const userAuth = await getUserAuth(userId, UserAuthTypes.PASSWORD);

    const passHashCorrect: boolean = await check(password, userAuth.hash);
    return passHashCorrect;
  }

export async function getSessionProperties (User: User) {
    const obj = getSubset(sessionAttributes, User);
    return obj;
}

export async function createUserAuth(id: number, password: string) {
  const hash = await createHashHex(password);

  await UserAuth.create({
    userId: id,
    hash,
    authType: UserAuthTypes.PASSWORD
  })
}

export async function getUserAuth (userId: number, hashType: string) {
  const userAuth = await UserAuth.findOne({
    where: {
      userId: userId,
      authType: hashType
    }
  });

  return userAuth;
}