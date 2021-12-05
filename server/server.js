const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../build' ))); //serves the index.html

//app.use('/build', express.static(path.resolve(__dirname, '../build')));

// app.get('/test', (req, res) => {
//   return res.status(200).json("Pink Fairy Armidallo -test");
// });

app.post('/login', (req, res) => {
  return res.status(200).json(`user logged in!`);
  // return res.status(200).json(`user ${username} logged in!`);
}); 

app.post('/signup', (req, res) => {
  return res.status(200).json("hello, new user created!");
}); 

// Second priority
// app.post('/badUserPasswordCheck', (req, res) => {
//   return res.status(200).json("password checked against bad list!");
// }); 

app.post('/userCheck', (req, res) => {
  return res.status(200).json("user checked!");
}); 

app.post('/addEntry', (req, res) => {
  return res.status(200).json("password added for entry!");
});

// Second priority
// app.post('/deleteEntry', (req, res) => {
//   return res.status(200).json('entry deleted!');
// });

app.post('/getEntry', (req, res) => {
  return res.status(200).json('entry incoming!');
});

// app.use('/api', apiRouter);

app.listen(3000); 