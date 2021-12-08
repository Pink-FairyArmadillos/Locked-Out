const passwordController = require("../controllers/passwordController");
const express = require("express");
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  return res.status(200).json("");
});

router.get("/login", passwordController.getLogin, (req, res) => {
  return res.status(200).json({ ...res.locals.userMetaData });
});

router.post(
  "/signup",
  passwordController.getLogin,
  passwordController.getTotalUsers,
  passwordController.getSignup,
  (req, res) => {
    return res.status(200).json({ ...res.locals.userMetaData });
  }
);

router.post("/addEntry", passwordController.addEntry,passwordController.getAllEntries , (req, res) => {
  return res.status(200).json([...res.locals.entries]);
});

router.get("/getAllEntries", passwordController.getAllEntries, (req, res) => {
  return res.status(200).json([...res.locals.entries]);
});

router.patch('/patchEntry',
  passwordController.updateEntry,
 (req, res) => {
   return res.status(200).json([...res.locals.entries]);
 });


router.delete('/deleteEntry',
  passwordController.deleteEntry, 
  (req, res) => {
    return res.status(200);
  })




module.exports = router;
