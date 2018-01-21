"use strict";

import dht from "./routes/dht";
import express = require("express");
import light from "./routes/light";

let app = express();

let config = {
    baby_birthday: "2017-04-27",
};

app.set("view engine", "ejs");
app.set("views", "views");
app.use("/public", express.static("public"));

app.get("/", (req: express.Request, res: express.Response, next: express.NextFunction)  => {
  res.render("index", { config });
});

app.use("/api/light", light);
app.use("/api/dht", dht);

app.listen(7000, () => {
    console.log("Example app listening on port 7000!");
});
