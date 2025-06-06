import { eq } from "drizzle-orm";
import { db } from "../db/db";
import { farmTable } from "../db/schema/farm.schema";
import { FarmModel } from "../models/farm.model";

export class FarmRepository {
    async findById(id: string): Promise<FarmModel | null> {
        try {
            const farm = await db.select()
                .from(farmTable)
                .where(eq(farmTable.id, id))
                .then(res => res[0]);

            return farm;
        } catch (error) {
            return null;
        }
    }
}
