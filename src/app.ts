import express from "express";
import expressLayouts from "express-ejs-layouts";
import session from "express-session";
import flash from "express-flash";
import { join } from "path";
import { config } from "./config/config";
import router from "./routes/router";

export const app = express();

app.use(express.static(join(__dirname, "../public/")));

app.use(expressLayouts);
app.set("layout", "layouts/main_layout");

app.set("view engine", "ejs");
app.set("views", join(__dirname, "../views"));

app.use(express.urlencoded({ extended: true }));

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
