import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import cors from "cors";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const mongoURI: string =
  "mongodb+srv://sumon0002001:iPoSo8ePmwsKwkyp@personalfinancetracker.etkrnka.mongodb.net/";

mongoose
  .connect(mongoURI)
  .then(() => console.log("connected to the database"))
  .catch((err) => console.error("failed to connect to database", err));

app.use("/financial-records", financialRecordRouter);
app.listen(port, () => {
  console.log("server is running on port 3001 ");
});
