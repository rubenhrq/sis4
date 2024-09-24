const router = require('express').Router();

router.get('/login', (req, res) => {
    res.render('../views/login');
});

router.get('/index', (req, res) => {
    res.render('../views/partials/index.hbs');
});

router.get('/register', (req, res) => {
    res.render('../views/register');
});

module.exports = router;