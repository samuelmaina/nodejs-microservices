import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { createConnection } from "typeorm";

createConnection()
  .then((db) => {
    const PORT: number = 8080;

    const app = express();

    app.use(cors());

    app.listen(PORT, () => {
      console.log("Server listening of port", PORT);
    });
  })
  .catch((e) => {
    console.log("unable to connect to the database due to error " + e);
  });
