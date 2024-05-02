import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';

import * as schema from './schema';
import { DATABASE_URL } from '@/utils/db';

const client = new Client({
  connectionString: DATABASE_URL,
});

client.connect();

export const db = drizzle(client, { schema: schema });
