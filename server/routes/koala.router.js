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
koalaRouter.post('/', (req, res) => {
    console.log('sending koala into database...')
    const sqlQueryText =`
    INSERT INTO "koalas"
        ("name", "gender", "age", "ready_to_transfer", "notes")
        VALUES
        ($1, $2, $3, $4, $5);
    `
    const sqlQueryValues = [
        req.body.name,
        req.body.gender,
        req.body.age,
        req.body.ready_to_transfer,
        req.body.notes
    ]
    pool.query(sqlQueryText, sqlQueryValues)
        .then((dbResult) => {
            res.sendStatus(201)
        })
        .catch((dbError) => {
            console.error('aw shucks! its boken...😞', dbError)
            res.sendStatus(500)
        })
})

// PUT


// DELETE

module.exports = koalaRouter;