import { NextFunction, Request, Response } from 'express';

export default function csrf(req: Request, res: Response, next: NextFunction): Response | void {
  const requestId = req.headers['x-request-id'];

  if (!requestId || requestId !== req.body.requestId) {
    return res.status(401).send('Unauthorized');
  }

  next();
}
