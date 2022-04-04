import { NextFunction, Request, Response } from 'express';

export default function cors(_: Request, res: Response, next: NextFunction): void {
  res.setHeader('Cross-Origin-Resource-Policy', 'same-origin');

  next();
}
