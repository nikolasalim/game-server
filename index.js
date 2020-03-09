const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const db = require("./db");
const jsonParser = express.json();
const userRouter = require("./user/router");

app.use(jsonParser);
app.use(userRouter);

app.listen(port, () => console.log(`I'm running at ${port}, baby!`));
