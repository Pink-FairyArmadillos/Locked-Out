const express = require("express");
const cookieParser = require('cookie-parser');
const app = express();
const path = require("path");
const apiRouter = require("./routes/api");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));
app.get("/public", express.static("public"));
app.use(express.static(path.resolve(__dirname, "../")));

app.get("/", (req, res) => {
  return res.status(200).json("");
});
app.use("/api", apiRouter);

//local error handler
app.use((req, res) => {
  console.log("404: body was " + req.query);
  res.status(404).send("error page not found with body: " + req.body);
})

//global error handler
app.use((err, req, res, next) =>{
  console.log(err);
  res.status(500).send(`Internal Server Error: ${err.message}`)
})

module.exports = app.listen(3000);

