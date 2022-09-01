import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import routes from "./routes";

const PORT: number = 8080;

const app = express();

app.use(cors());

app.use(express.json());
app.use("api", routes);

app.use(nonExistantApiEndpoint);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Server listening of port", PORT);
});

function errorHandler(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(error);
  res.json(500).json({
    message:
      "Some internal server error occured.Sorry for any inconvinience cause. Please try again later.",
  });
}

function nonExistantApiEndpoint(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.json(404).json({
    message: "Page not found.Check for typos in the url",
  });
}
