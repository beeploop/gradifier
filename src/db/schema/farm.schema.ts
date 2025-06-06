import { int, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";

export const farmTable = mysqlTable("farm", {
    id: varchar({ length: 255 }).notNull().primaryKey(),
    number: int().notNull().unique(),
    createdAt: timestamp().notNull().defaultNow(),
});
