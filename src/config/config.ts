import dotenv from "dotenv";

dotenv.config();

type AppConfig = {
    PORT: number,
    secretKey: string,
};

export const config: AppConfig = {
    PORT: process.env.PORT ? Number(process.env.PORT) : 3000,
    secretKey: process.env.SECRET_KEY ? process.env.SECRET_KEY : "secret-key",
}
