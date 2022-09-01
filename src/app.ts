import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import routes from "./routes";

const PORT: number = 8080;

const app = express();

app.use(cors());

app.use(express.json());
app.use("api", routes);

app.listen(PORT, () => {
  console.log("Server listening of port", PORT);
});
