import https from 'https';
import fs from 'fs';
import path from 'path';

import app from './src/server';
import routes from './src/routes';

const PORT = process.env.SERVER_PORT || 8443;

const options = {
  key: fs.readFileSync(path.join(__dirname, './crt/selfsigned.key')),
  cert: fs.readFileSync(path.join(__dirname, './crt/selfsigned.crt')),
};

https.createServer(options, app).listen(PORT, () => {
  routes(app);

  console.log(`Server running on port ${PORT}`);
});
