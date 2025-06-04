import { mysqlTable, timestamp, varchar } from 'drizzle-orm/mysql-core';

export const userTable = mysqlTable("user", {
    id: varchar({ length: 255 }).primaryKey(),
    name: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
    imageUrl: varchar({ length: 255 }),
    password: varchar({ length: 255 }).notNull(),
    createdAt: timestamp().notNull().defaultNow(),
    updatedAt: timestamp().notNull().defaultNow().onUpdateNow(),
});
