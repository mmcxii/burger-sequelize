const db = require('./connection');

const selectAll = (table, callback) => {
    let data;

    const sql = `SELECT * FROM ${table}`;

    db.query(sql, (err, res) => {
        if (err) throw err;

        data = res;

        return callback(data);
    });
};

const insertOne = (table, newRow) => {
    const sql = `INSERT INTO ${table}(name)
                 VALUES ("${newRow}")`;

    db.query(sql, (err) => {
        if (err) throw err;

        console.log(`Successfully inserted ${newRow} into ${table}.`);
    });
};

const updateOne = (table, column, id, newVal) => {
    const sql = `UPDATE ${table} SET ${column} = ${newVal} WHERE id = ${id}`;

    db.query(sql, (err, res) => {
        if (err) throw err;

        console.log(`Successfully updated ${table}: ${id} ${column} to ${newVal}`);
    });
};

module.exports = { selectAll, insertOne, updateOne };
