import { createLogger, format, transports, Logger } from "winston";
import morgan from "morgan";

const logLevels = {
  fatal: 0,
  error: 1,
  warn: 2,
  info: 3,
  debug: 4,
  trace: 5,
};

export const logger: Logger = createLogger({
  levels: logLevels,
  level: process.env.LOG_LEVEL || "info",
  transports: [new transports.Console()],
  defaultMeta: { app: "demo-service" },
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD hh:mm:ss" }),
    format.json()
  ),
});

const HTTPLogger: Logger = createLogger({
  level: "http",
  transports: [new transports.Console()],
  defaultMeta: { app: "demo-service" },
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD hh:mm:ss" }),
    format.json()
  )
});

export const HTTPLogMiddleware = morgan(
  ":method :url :status - :response-time ms",
  { stream: { write: (message) => HTTPLogger.http(message.trim()) } }
);
