import express, { urlencoded } from "express";
import session from "express-session";
import flash from "express-flash";
import expressLayouts from "express-ejs-layouts";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import router from "./routes/router.js";
import { config } from "./config/config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const app = express();

app.use(express.static(join(__dirname, "../public/")));

app.use(expressLayouts);
app.set("layout", "layouts/main_layout");

app.set("view engine", "ejs");
app.set("views", join(__dirname, "../views"));

app.use(urlencoded({ extended: true }));
app.use(
  session({
    name: "connect.sid",
    secret: config.secretKey,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 60000,
      sameSite: "lax",
    },
  }),
);
app.use(flash());

app.use(router);
