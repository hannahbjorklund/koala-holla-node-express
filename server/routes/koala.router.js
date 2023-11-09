const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');

// GET
koalaRouter.get('/', (req, res) => {
    const sqlQueryText = `
    SELECT * FROM "koalas"
    `

    pool.query(sqlQueryText)
    .then((dbResult) => {
        console.log("Retrieved koalas from DB", dbResult.rows);
        res.send(dbResult.rows);
    }).catch((dbError) => {
        console.error("Could not retrieve koalas. Relinquish.", dbError);
    })
})

// POST


// PUT


// DELETE

module.exports = koalaRouter;