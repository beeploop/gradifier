import { float, int, mysqlEnum, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";
import { farmTable } from "./farm.schema";

export const harvestTable = mysqlTable("harvest", {
    id: varchar({ length: 255 }).notNull().primaryKey(),
    farmId: varchar({ length: 255 }).references(() => farmTable.id).notNull(),
    fingerCount: int().notNull(),
    fingerSize: mysqlEnum(["s", "r"]).default("s").notNull(),
    weight: float().notNull(),
    fingerClass: mysqlEnum(["33BCP", "25BCP", "38BCP", "30TR", "38TR", "36TR"]).notNull(),
    confidence: float().notNull(),
    createdAt: timestamp().notNull().defaultNow(),
});
