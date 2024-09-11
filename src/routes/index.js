const router = require('express').Router();

router.get('/login', (req, res) => {
    res.render('../views/login');
});

router.get('/', (req, res) => {
    res.render('../views/login');
});

router.get('/register', (req, res) => {
    res.render('../views/register');
});

module.exports = router;