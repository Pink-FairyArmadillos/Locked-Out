const express = require("express");
const app = express();
const path = require("path");
const apiRouter = require("./routes/api");
const PORT = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/public", express.static("public"));
app.use(express.static(path.resolve(__dirname, "../")));

app.get("/", (req, res) => {
  return res.status(200).json("");
});
app.use("/api", apiRouter);

//catchall error handler
//also send 404.html page
app.use((req,res) =>{
  res.status(404).sendFile(path.resolve(__dirname, '../client/404.html'));
});

//global error handling middleware
app.use((err, req, res, next) =>{
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});



app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
