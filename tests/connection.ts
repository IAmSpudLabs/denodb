import "https://deno.land/std@0.155.0/dotenv/load.ts";
import { Database, MySQLConnector, SQLite3Connector } from "../mod.ts";

const defaultMySQLOptions = {
  database: "test",
  host: Deno.env.get("MYSQL_HOST") ?? "",
  username: Deno.env.get("MYSQL_USER") ?? "",
  password: Deno.env.get("MYSQL_PASSWORD") ?? "",
  port: parseInt(Deno.env.get("MYSQL_PORT") ?? "3306"),
};

const defaultSQLiteOptions = {
  filepath: "test.sqlite",
};

const getMySQLConnection = (options = {}, debug = true): Database => {
  const connector = new MySQLConnector({
    ...defaultMySQLOptions,
    ...options,
  });
  const connection: Database = new Database({ connector, debug });

  return connection;
};

const getSQLiteConnection = (options = {}, debug = true): Database => {
  const connector = new SQLite3Connector({
    ...defaultSQLiteOptions,
    ...options,
  });
  const connection: Database = new Database({ connector, debug });

  return connection;
};

export { getMySQLConnection, getSQLiteConnection };
