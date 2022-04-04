import path from 'path';
import sqlite3 from 'sqlite3';

export default new sqlite3.Database(path.join(process.env.DB_PATH, 'database.sqlite'));
