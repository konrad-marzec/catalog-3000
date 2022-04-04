import { NextFunction, Request, Response } from 'express';

export default function csp(_: Request, res: Response, next: NextFunction): void {
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');

  next();
}
