require("dotenv").config();
const { SERVER_PORT } = process.env;
const express = require("express");
const app = express();

app.use(express.static(`${__dirname}/../build`));

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));
