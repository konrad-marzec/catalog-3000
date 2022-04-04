import { Request, Response } from 'express';

import * as Auth from '../model/auth';
import * as User from '../model/user';
import { CreateSessionInput } from '../schema/session.schema';

export async function createSessionHandler(
  req: Request<unknown, unknown, CreateSessionInput['body']>,
  res: Response,
): Promise<Response> {
  try {
    const { username, password } = req.body.payload;

    const user = await User.findBy('username', username);

    if (!user) {
      return res.status(401).send('Invalid Credentials');
    }

    const { hash } = await Auth.hash(password, user.salt);

    if (hash !== user.password) {
      return res.status(401).send('Invalid Credentials');
    }

    const token = await Auth.token();

    await User.setToken(user, token);

    return res.status(200).send({ token });
  } catch {
    return res.status(400).send('Invalid Credentials');
  }
}

export async function deleteSessionHandler(_: Request, res: Response): Promise<Response> {
  try {
    await User.removeToken(res.locals.user);

    return res.status(200).send();
  } catch {
    return res.status(400).send();
  }
}
