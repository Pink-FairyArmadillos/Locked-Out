const passwordController = require('../controllers/passwordController');
const express = require('express');
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));


router.get('/', (req, res) => {
    return res.status(200).json("");
});

router.get('/login', passwordController.getLogin, (req, res) => {
    return res.status(200).json(res.locals.userExists)
});

router.post('/signup', passwordController.getLogin, passwordController.getSignup, (req, res) => {
    return res.status(200).json({
        ...{
            signupSuccessful: res.locals.signupSuccessful,
            userExists: res.locals.userExists
        }
    })
});

router.get('/badUserPasswordCheck', passwordController.getBadPasswordCheck, (req, res) => {
    return res.status(200).json({ isBadPasswordUser: res.locals.isBadPasswordUser })
});

router.post('/addEntry', passwordController.addEntry, (req, res) => {
    return res.status(200).json({ wasSuccessful: res.locals.wasSuccessful })
});

router.get('/getAllEntries', passwordController.getAllEntries, (req, res) => {
    return res.status(200).json([...[res.locals.entries]])
});

module.exports = router;

