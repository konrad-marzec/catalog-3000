import crypto from 'crypto';
import { NextFunction, Request, Response } from 'express';

export default function csp(_: Request, res: Response, next: NextFunction): void {
  const nonce = crypto.randomBytes(16).toString('hex');

  res.locals.nonce = nonce;

  res.setHeader(
    'Content-Security-Policy',
    `default-src 'none'; connect-src 'self'; script-src 'self' 'nonce-${nonce}'; frame-ancestors 'self'; form-action 'self'; manifest-src 'self'; img-src 'self'; style-src 'self' 'nonce-${nonce}'`,
  );

  next();
}
