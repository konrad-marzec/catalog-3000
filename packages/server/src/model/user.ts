import fs from 'fs';
import path from 'path';

import db from '../db/sqlite';

const STORAGE_PATH = path.join(__dirname, '../db/users.json');

export interface User {
  username: string;
  password: string;
  token?: string;
  salt: string;
  id: string;
}

async function readUsers(): Promise<User[]> {
  return new Promise((resolve, reject) => {
    fs.readFile(STORAGE_PATH, (error, data) => {
      if (error) {
        reject(error);
      }

      resolve(JSON.parse(data as any as string));
    });
  });
}

export async function findOne(params: Record<string, string>): Promise<User | undefined> {
  const users = await readUsers();

  return Object.values(users).find((user) => {
    let matches = true;

    Object.entries(params).forEach(([key, value]) => {
      if (user[key] !== value) {
        matches = false;
      }
    });

    return matches;
  });
}

export async function findBy(field: keyof User, value: string): Promise<User> | undefined {
  return new Promise((resolve, reject) =>
    // eslint-disable-next-line no-promise-executor-return
    db.get(`SELECT * FROM users WHERE ${field} = :value`, { ':value': value }, (error, rows?: User) => {
      if (error) {
        reject(error);
      } else {
        resolve(rows);
      }
    }),
  );
}

export async function setToken(user: User, token: string): Promise<undefined> {
  return new Promise((resolve, reject) =>
    // eslint-disable-next-line no-promise-executor-return
    db.run('UPDATE users SET token = :token WHERE id = :id', { ':id': user.id, ':token': token }, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve(undefined);
      }
    }),
  );
}

export async function removeToken(user: User): Promise<undefined> {
  return new Promise((resolve, reject) =>
    // eslint-disable-next-line no-promise-executor-return
    db.run('UPDATE users SET token = NULL WHERE id = :id', { ':id': user.id }, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve(undefined);
      }
    }),
  );
}
