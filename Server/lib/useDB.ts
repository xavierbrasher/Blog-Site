import pgp from "pg-promise";
const pg = pgp({
    error(err, e) {
        if (e.cn) {
            console.log("CN:", e.cn);
            console.log("EVENT:", err.message || err);
        }
        if (e.query) {
            if (e.params) {
                console.log("PARRAMS: ", e.params);
                console.log("QUERY: ", e.query);
                console.log("EVENT: ", err.message || err);
            }
        }
        if (e.ctx) {
            console.log("TASK: ", e.ctx);
            console.log("EVENT: ", err.message || err);
        }
    },
});
const db = pg(
    "postgres://postgres:" + process.env.PASSWORD + "@127.0.0.1:5432/blog_site"
);
export default db;
