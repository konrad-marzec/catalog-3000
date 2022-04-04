import { Request, Response, NextFunction } from 'express';
import { AnyZodObject, ZodError } from 'zod';

const validate =
  (schema: AnyZodObject) =>
  (req: Request<unknown, unknown, unknown>, res: Response, next: NextFunction): Response | void => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (e: unknown) {
      return res.status(400).send((e as ZodError).errors);
    }
  };

export default validate;
