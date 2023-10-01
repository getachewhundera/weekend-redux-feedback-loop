const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();


// GET router. would be GET request for all answered questions in ReviewPage. 
// router.get('/', (req, res) => {
//   const queryText = 'SELECT * FROM feedback';
//   pool.query(queryText)
//     .then((result) => { res.send(result.rows); })
//     .catch((err) => {
//       console.log('Error completeing SELECT feedback query', err);
//       res.sendStatus(500);
//     });
// });


router.post('/', (req, res) => {
  console.log('Received body:', req.body);
  const newFeedback = req.body;

  //checking if comments was answered 
  if(!newFeedback.comments) {
    newFeedback.comments= 'Not Answered'; 
  }

  const queryText = `INSERT INTO feedback ("feeling", "understanding", "support", "comments")
                    VALUES ($1, $2, $3, $4)`;
  const queryValues = [
    newFeedback.feeling,
    newFeedback.understanding,
    newFeedback.support,
    newFeedback.comments,
  
  ];
  console.log('Query values:', queryValues);
  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error INSERTING feedback query', err);
      res.sendStatus(500);
    });
});

module.exports = router;