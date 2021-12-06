const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../build' ))); //serves the index.html

//app.use('/build', express.static(path.resolve(__dirname, '../build')));

app.get('/test', (req, res) => {
  return res.status(200).json("Pink Fairy Armidallo -test");
});

// app.use('/api', apiRouter);

app.listen(3000); 