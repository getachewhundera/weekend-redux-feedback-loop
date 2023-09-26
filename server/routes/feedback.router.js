const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();


// GET router. would be GET request for all answered questions in ReviewPage. 
router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM feedback';
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT feedback query', err);
      res.sendStatus(500);
    });
});