import dotenv from "dotenv";

dotenv.config();

/**
 * @typedef {Object} config
 * @property {number} PORT
 * @property {string} secretKey
 */
export const config = {
  PORT: process.env.PORT ? Number(process.env.PORT) : 3000,
  secretKey: process.env.SECRET || "secret-key",
};
