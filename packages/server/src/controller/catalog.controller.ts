import { Request, Response } from 'express';

import * as Catalog from '../model/catalog';

export async function browseCatalogHandler(req: Request, res: Response): Promise<Response> {
  return res.status(200).send(Catalog.read(req.params[0]));
}
