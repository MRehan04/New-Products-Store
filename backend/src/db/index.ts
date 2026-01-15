import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";
import { ENV } from "../config/env";

if (!ENV.DATABASE_URL) {
    throw new Error("Database_URL is not set in environment variavles")
}

// initialize PostgreSQL connection pool
const pool = new Pool({ connectionString: ENV.DATABASE_URL });

// log when first connection is made
pool.on("connect", () => {
    console.log("Database connected successfully");
});

// log when an error occur
pool.on("error", (err) => {
    console.log("Database connection error", err);
});

export const db = drizzle({ client: pool, schema });