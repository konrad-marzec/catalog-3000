import fs from 'fs';
import path from 'path';
import { Express } from 'express';

import authenticate from './middleware/authenticate';
import csrf from './middleware/cross-site-request-forgery';
import { createSessionHandler, deleteSessionHandler } from './controller/session.controller';
import validate from './middleware/validate';
import { createSessionSchema } from './schema/session.schema';
import { browseCatalogHandler } from './controller/catalog.controller';

export default function (app: Express): void {
  app.post('/api/v1/session', [validate(createSessionSchema), csrf], createSessionHandler);
  app.delete('/api/v1/session', authenticate, deleteSessionHandler);

  app.get('/api/v1/file-browse/*', authenticate, browseCatalogHandler);

  app.use('*', (_, res) => {
    fs.readFile(path.join(__dirname, '../public/index.html'), (err, data) => {
      if (err) {
        return res.sendStatus(404);
      }

      const html = data.toString().replace(/__webpack_nonce_template__/gi, res.locals.nonce as string);

      return res.status(200).send(html);
    });
  });
}
