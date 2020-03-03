var express = require('express');
var router = express.Router();

// require 'pg-promise', but call it immediately
// so we can configure the connection
const pgp = require('pg-promise')({
    query: e => {
        // print the SQL query
        console.log(`QUERY: ${e.query}`);
    }
});

// next, give the info about our specific database
// that we're talking to
const options = {
    host: 'localhost',
    database: 'spellingGame'
};

const db = pgp(options);
async function pullFromDB(){
    const result = await db.one(`select * from spellingBee where wordId=1  `);
    console.log(result)
    return result
}

router.get('/', function(req, res, next) {
    res.send(result);
});

module.exports = router;
pullFromDB()