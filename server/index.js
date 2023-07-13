import express from "express";
import connection from "./database/db.js";
import dotenv from "dotenv";
import router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
dotenv.config();

app.use(cors());

//routes
app.use(" ", router);
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

const PORT = 8080;
const usesrname = process.env.DB_USERNAME;
const passowrd = process.env.DB_PASSWORD;

connection(usesrname, passowrd);
app.listen(PORT, () => console.log(`server is runing sucessfullt on ${PORT}`));
