// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { debug, info, error } from "./../../src/logger";

export default (req, res) => {
  debug("Nuevo mensaje de debug");
  info("Nuevo mensaje de info");
  error("Nuevo mensaje de error");

  res.status(200).json({ name: "John Doe" });
};
