import dotenv from "dotenv";

dotenv.config();

/**
 * @typedef {Object} config
 * @property {number} PORT
 */
export const config = {
  PORT: process.env.PORT ? Number(process.env.PORT) : 3000,
};
