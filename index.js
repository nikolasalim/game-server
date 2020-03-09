const express = require("express");
const db = require("./db");
const userRouter = require("./user/router");
const loginRouter = require("./auth/router");
const cors = require("cors");
const corsMiddleware = cors();

const app = express();
const port = process.env.PORT || 4000;
const jsonParser = express.json();

app.use(corsMiddleware);
app.use(jsonParser);
app.use(userRouter);
app.use(loginRouter);

app.listen(port, () => console.log(`I'm running at ${port}, baby!`));
