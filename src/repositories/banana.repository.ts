import { eq } from "drizzle-orm";
import { db } from "../db/db";
import { bananaTable } from "../db/schema/banana.schema";
import { BananaModel } from "../models/banana.model";

export class BananaRepository {
    DEFAULT_LIMIT = 10;
    limit: number;
    offset: number;

    constructor() {
        this.limit = this.DEFAULT_LIMIT;
        this.offset = 0;
    }

    async findAll(limit: number, offset: number): Promise<BananaModel[]> {
        try {
            const bananas = await db.select()
                .from(bananaTable)
                .limit(limit || this.limit)
                .offset(offset || this.offset);

            return bananas;
        } catch (error) {
            return [];
        }
    }

    async findAllByFarm(farmId: string, limit: number, offset: number): Promise<BananaModel[]> {
        try {
            const bananas = await db.select()
                .from(bananaTable)
                .where(eq(bananaTable.farmId, farmId))
                .limit(limit || this.limit)
                .offset(offset || this.offset);

            return bananas;
        } catch (error) {
            return [];
        }
    }
}
