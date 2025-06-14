import { eq } from "drizzle-orm";
import { db } from "../db/db";
import { harvestTable } from "../db/schema/harvest.schema";
import { HarvestModel } from "../models/harvest.model";

export class HarvestRepository {
    DEFAULT_LIMIT = 10;
    limit: number;
    offset: number;

    constructor() {
        this.limit = this.DEFAULT_LIMIT;
        this.offset = 0;
    }

    async findAll(limit: number, offset: number): Promise<HarvestModel[]> {
        try {
            const harvests = await db.select()
                .from(harvestTable)
                .limit(limit || this.limit)
                .offset(offset || this.offset);

            return harvests;
        } catch (error) {
            return [];
        }
    }

    async findAllByFarm(farmId: string, limit: number, offset: number): Promise<HarvestModel[]> {
        try {
            const harvests = await db.select()
                .from(harvestTable)
                .where(eq(harvestTable.farmId, farmId))
                .limit(limit || this.limit)
                .offset(offset || this.offset);

            return harvests;
        } catch (error) {
            return [];
        }
    }
}
