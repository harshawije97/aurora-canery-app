/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { neonConfig, Pool } from '@neondatabase/serverless';
import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from 'ws';

config({ path: './.env' });

// Add neon serverless to include the transactions
neonConfig.webSocketConstructor = ws;

const pool = new Pool({ connectionString: process.env.DATABASE_URL! });
export const db = drizzle({ client: pool });
