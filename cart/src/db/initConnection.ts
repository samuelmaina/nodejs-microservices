import { createConnection } from "typeorm";

let dababaseInstance;

createConnection()
  .then((db) => {
    dababaseInstance = db;
  })
  .catch((err) =>
    console.log("Unable to connect to the database due to the error " + err)
  );

export default dababaseInstance;
