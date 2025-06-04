import { mysqlTable, timestamp, varchar } from 'drizzle-orm/mysql-core';

export const userTable = mysqlTable("user", {
    id: varchar({ length: 255 }).primaryKey(),
    email: varchar({ length: 255 }).notNull().unique(),
    password: varchar({ length: 255 }).notNull(),
    createdAt: timestamp().notNull().defaultNow(),
    updatedAt: timestamp().notNull().defaultNow().onUpdateNow(),
});
