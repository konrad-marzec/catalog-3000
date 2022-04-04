import crypto from 'crypto';
import path from 'path';
import fs from 'fs';

export async function hash(password: string, salt?: string): Promise<{ hash: string; salt: string }> {
  let s = salt;

  if (!s) {
    s = crypto.randomBytes(16).toString('hex');
  }

  return new Promise((resolve, reject) => {
    crypto.scrypt(password, s, 128, (err, derivedKey) => {
      if (err) {
        reject(err);
      } else {
        resolve({ hash: derivedKey.toString('base64'), salt: s });
      }
    });
  });
}

export async function token(): Promise<string> {
  const key = fs.readFileSync(path.join(__dirname, '../../crt/token.key'));

  return crypto.privateEncrypt(key, crypto.randomBytes(16)).toString('hex');
}
