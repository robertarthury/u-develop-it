const express = require('express');
const res = require('express/lib/response');
const mysql = require('mysql2');
const PORT  = process.env.PORT || 3008;
const app = express();
const db = require('./db/connection.js')

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//get or post goes here 

// (Not found response)
app.use((req,res) => {
    res.status(404).end();
});
//db.query(`SELECT * FROM candidates`, (err, rows) => {
  //console.log(rows);
//});
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });