const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("./index.db");
db.run(
  "CREATE TABLE student(id integer primary key, name text not null, email text unique)"
);
db.close();