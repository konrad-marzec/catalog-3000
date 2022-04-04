import db from '../src/db/sqlite';

import createUsersTable from './create-user-table';
import createUsers from './create-users';

async function migrate(): Promise<void> {
  await createUsersTable(db);
  await createUsers(db);
}

void migrate();
