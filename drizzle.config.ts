import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
import { DATABASE_URL } from '@/utils/db';

dotenv.config();

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: DATABASE_URL,
  },
} satisfies Config;
