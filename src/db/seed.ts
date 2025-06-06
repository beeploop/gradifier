import { drizzle } from "drizzle-orm/mysql2";
import { config } from "../config/config";
import { farmTable } from "./schema/farm.schema";
import { userTable } from "./schema/user.schema";
import { randomUUID } from "crypto";
import { UserModel } from "../models/user.model";
import { exit } from "process";

const db = drizzle({
    connection: {
        uri: config.DB_URL,
    }
});

async function main() {
    console.log("seeding...");

    const users: UserModel[] = [
        UserModel.createNew(
            "firstname lastname",
            "admin@email.com",
            "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
            "password",
        ),
    ];

    const farms = [
        { id: randomUUID(), number: 1 },
        { id: randomUUID(), number: 2 },
        { id: randomUUID(), number: 3 },
        { id: randomUUID(), number: 4 },
    ];

    console.log("seeding farms...");
    await db.delete(farmTable);
    await db.insert(farmTable).values(farms);

    console.log("seeding users...");
    await db.delete(userTable);
    await db.insert(userTable).values(users);

    console.log("seeding complete");
    exit();
}

main();
