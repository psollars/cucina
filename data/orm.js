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
  ssl: false
};

const pool = new pg.Pool(dbConfig);

const orm = {
  readAll: function(tableName) {
    const sql = `SELECT * FROM ${tableName};`;
    return pool.query(sql);
  },

  create: function(newItem, tableName) {
    console.log("create function >>", newItem, tableName);
    const sql = `INSERT INTO ${tableName} (
                             Name, 
                             Quantity)
                      VALUES (
                             $1, 
                             $2);`;
    const values = [newItem.desc, newItem.qty];
    return pool.query(sql, values);
  }
};

module.exports = orm;
