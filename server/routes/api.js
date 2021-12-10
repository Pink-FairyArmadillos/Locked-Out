const passwordController = require("../controllers/passwordController");
const express = require("express");
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  return res.status(200).json("");
});

// login to account
router.post("/login", 
passwordController.getLogin, 
passwordController.setSessionCookie,
(req, res) => {
  return res.status(200).json({ ...res.locals.userMetaData });
});

// create an account
router.post(
  "/signup",
  passwordController.getSignup,
  (req, res) => {
    return res.status(200).json({ ...res.locals.userMetaData });
  }
);

router.post("/addEntry", 
  passwordController.addEntry,
  passwordController.getAllEntries , 
  (req, res) => {
  return res.status(200).json([...res.locals.entries]);
});

router.put("/updateEntry", 
  passwordController.updateEntry,
  passwordController.getAllEntriesBody , 
  (req, res) => {
  return res.status(200).json([...res.locals.entries]);
});

router.delete("/deleteEntry", 
  passwordController.deleteEntry,
  passwordController.getAllEntriesBody , 
  (req, res) => {
  return res.status(200).json([...res.locals.entries]);
});

router.get("/getAllEntries", passwordController.getAllEntries, (req, res) => {
  return res.status(200).json([...res.locals.entries]);
});

module.exports = router;
