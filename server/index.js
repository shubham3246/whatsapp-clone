import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import Routes from './routes/route.js';
import Connection from "./database/db.js";

const app = express();

const PORT = 5000;
app.listen(PORT, ()=>console.log("node running successfully on port :", PORT));
Connection();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);

