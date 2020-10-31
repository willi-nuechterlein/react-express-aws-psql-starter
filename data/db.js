const spicedPg = require("spiced-pg");

const db = spicedPg(
    process.env.DATABASE_URL ||
        "postgres:postgres:postgres@localhost:5432/<INSERT DATABSE NAME HERE>"
);

module.exports.getMoreImages = (param1, param2) => {
    const q = `
        SELECT * FROM <INSERT DATABSE NAME HERE>
        WHERE id = $1 OR id = $2
        `;
    const params = [param1, param2];
    return db.query(q, params);
};
