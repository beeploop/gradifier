import { drizzle } from "drizzle-orm/mysql2";
import { config } from "../config/config";

export const db = drizzle({
    connection: {
        uri: config.DB_URL,
    }
});
