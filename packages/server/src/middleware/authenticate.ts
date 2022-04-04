import { NextFunction, Request, Response } from 'express';

import * as User from '../model/user';

export default async function verifyToken(req: Request, res: Response, next: NextFunction): Promise<unknown> {
  const header = req.headers.authorization;

  if (!header) {
    return res.status(403).send('Unauthorized!');
  }

  const bearer = header.split(' ');
  const token = bearer[1];

  try {
    const user = await User.findBy('token', token);

    if (!user) {
      return res.status(401).send('Unauthorized!');
    }

    res.locals.user = user;
  } catch {
    return res.status(401).send('Unauthorized!');
  }

  next();
}
