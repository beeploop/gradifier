import { float, int, mysqlEnum, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { farmTable } from "./farm.schema";

export const bananaTable = mysqlTable("banana", {
    id: varchar({ length: 255 }).notNull().primaryKey(),
    farmId: varchar({ length: 255 }).references(() => farmTable.id).notNull(),
    fingerCount: int().notNull(),
    fingerSize: mysqlEnum(["s", "r"]).default("s").notNull(),
    weight: float().notNull(),
    fingerClass: mysqlEnum(["33bcp", "25bcp", "38bcp", "30tr", "38tr", "36tr"]).notNull(),
    confidence: float().notNull(),
});
