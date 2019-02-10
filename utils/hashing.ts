import * as crypto from 'crypto';

// NIST SP 800-132
const DIGEST: string = 'sha512';
const ITERATIONS: number = 100000; // min 1000, more the better
const KEY_LEN: number = 64; // 512 bit (PBKDF2-HMAC-SHA-512)
const SALT_BYTES: number = 256 / 8;

async function check (value: string, hash: string) {
  const p: Array<string> = hash.split(':');

  if (p.length === 3) {
    const newHash: string = await createHashHex(value, p[1], parseInt(p[2]));
    return newHash === hash;
  }

  return false;
}

function createHashHex (value: string, salt: string = getSaltHex(), iterations: number = ITERATIONS) {
  return new Promise<string>((resolve, reject) => {
    crypto.pbkdf2(value, salt, iterations, KEY_LEN, DIGEST, (err, derivedKey) => {
      if (err) {
        reject(err);
      } else {
        resolve([derivedKey.toString('hex'), salt, iterations].join(':'));
      }
    });
  });
}

function getSaltHex () {
  return crypto.randomBytes(SALT_BYTES).toString('hex');
}

export {
  check,
  createHashHex
};
