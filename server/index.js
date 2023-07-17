import express from "express";
import config from "./src/config/config.js";
import cors from "cors";
import router from "./src/routes/routes.js";
import routerV1 from "./src/routes/v1/routes.js";
import mongoose from "mongoose";
import morgan from "morgan";

import swaggerUi from "swagger-ui-express";
import docs from "./src/docs/index.js";
import { errorHandler } from "./src/middlewares/errorHandler.js";

const app = express();

// Development environment setup
if (config.env === "development") {
  app.use(morgan("dev"));
}

// Production environment setup
if (config.env === "production") {
  app.use(morgan("combined"));
}

app.use(cors());
const mongoString = config.database.databaseUrl;
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});
database.once("connected", () => {
  console.log("Database Connected");
});

// Serve Swagger API documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(docs));

app.use(express.json());

app.use("/api", router);
app.use("/api/v1", routerV1);
app.use(express.urlencoded({ extended: true }));
const server = app.listen(config.port, () => {
  console.log(`Server Started at ${config.port}`);
});

// Middleware to handle errors
app.use(errorHandler);

// Handle Unhandled Promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${err.stack}`);
  console.log("Shutting down the server due to Unhandled Promise rejection");
  server.close(() => {
    process.exit(1);
  });
});

export default app;
