import { getConnectionManager, Connection } from "typeorm";

import configError from "../services/errorHandling/configError";

const {
  NODE_ENV,
  DB_HOST,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DATABASE,
  DB_PORT,
  DB_DIALECT,
  DATABASE_URL,
} = process.env;

export default async function connect(): Promise<Connection> {
  const connectionManager = getConnectionManager();
  const connection = connectionManager.create({
    name: "default",
    type: DB_DIALECT as any,
    url:
      DATABASE_URL ||
      `${DB_DIALECT}://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
    entities: [NODE_ENV === "production" ? "dist/entities/*.js": "src/entities/*.ts"],
    ssl: NODE_ENV === "production"
  });
  try {
    await connection.connect();
  } catch (e) {
    configError(e);
  }
  return connection;
}
