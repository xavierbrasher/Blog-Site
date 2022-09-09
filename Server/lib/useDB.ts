import pgp from "pg-promise";
const pg = pgp();
const db = pg(
    "postgres://postgres:" + process.env.PASSWORD + "@127.0.0.1:5432/postgres"
);
export default db;
