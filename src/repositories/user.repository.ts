import { eq } from "drizzle-orm";
import { db } from "../db/db";
import { userTable } from "../db/schema/user.schema";
import { UserModel } from "../models/user.model";

export class UserRepository {
    async findById(id: string): Promise<UserModel | null> {
        try {
            const user = await db.select()
                .from(userTable)
                .where(eq(userTable.id, id))
                .limit(1)
                .then(results => results[0]);

            return UserModel.fromDB(user);
        } catch (error) {
            return null;
        }
    }

    async findByEmail(email: string): Promise<UserModel | null> {
        try {
            const user = await db.select()
                .from(userTable)
                .where(eq(userTable.email, email))
                .limit(1)
                .then(results => results[0]);

            return UserModel.fromDB(user);
        } catch (error) {
            return null;
        }
    }
}
