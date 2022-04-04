import path from 'path';
import express from 'express';
import morgan from 'morgan';

import csp from './middleware/content-security-policy';
import sts from './middleware/strict-transport-security';
import cors from './middleware/cross-origin-resource-policy';

const app = express();

app.use(csp);
app.use(sts);
app.use(cors);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public'), { index: false }));

export default app;
