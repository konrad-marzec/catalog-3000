import sqlite3 from 'sqlite3';

export default async function migrate(db: sqlite3.Database): Promise<sqlite3.Database> {
  return db.exec(`CREATE TABLE IF NOT EXISTS users (
    token TEXT,
    salt TEXT NOT NULL,
    id TEXT PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL
    )`);
}
