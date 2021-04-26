import { ILogger } from "./logger.interface";

const debugDep = require("debug");

const debug = debugDep("debug");
const info = debugDep("info");
const error = debugDep("error");

const log = (message: string, _logger) => _logger(message);

const logger: ILogger = {
  debug: (message: string) => log(message, debug),
  info: (message: string) => log(message, info),
  error: (message: string) => log(message, error),
};

export default logger;
