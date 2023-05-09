require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./router");

const app = express();

app.use(express.json());
app.use(cors({
  origin:"http://localhost:9000"
}));
app.use(express.urlencoded({ extended: true}))



app.use("/api", routes);

app.listen(9000);
