/// <reference path="./globals.d.ts" />
import { createServer } from "http";
import { app } from "./app";
import { config } from "./config/config";

const server = createServer(app);

server.listen(
    config.PORT,
    () => console.log(`listening in port: ${config.PORT}`)
);
