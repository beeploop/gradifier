import { createServer } from "http";
import { app } from "./app.js";
import { config } from "./config/config.js";

const server = createServer(app);

server.listen(config.PORT, () => {
  console.log(`listening in port: ${config.PORT}`);
});
