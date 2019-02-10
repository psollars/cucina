const pg = require("pg");
const url = require("url");

const connectionUrl =
  process.env.DATABASE_URL || "postgres://Pat@localhost:5432/cucina";
const dbUrlParams = url.parse(connectionUrl);
const auth = dbUrlParams.auth.split(":");

const dbConfig = {
  user: auth[0],
  password: auth[1],
  host: dbUrlParams.hostname,
  port: dbUrlParams.port,
  database: dbUrlParams.pathname.split("/")[1],
  ssl: false,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
};

const pool = new pg.Pool(dbConfig);

module.exports = pool;
