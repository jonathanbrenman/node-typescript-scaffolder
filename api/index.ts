import express from "express";
import cors from "cors";
import { HTTPLogMiddleware, logger } from "./logs/logs";
import { PingRoutes } from "./router/ping";

const app = express();
const port = process.env.PORT || 8080;

const options: cors.CorsOptions = {
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: "*",
  preflightContinue: false,
};

// Add middlewares here
app.options('*', cors(options));
app.use(HTTPLogMiddleware);

// Add here the routers
app.use("/ping", PingRoutes);

// Start web server
app.listen(port, () => logger.info(`Server running on: http://localhost:${port}`));
