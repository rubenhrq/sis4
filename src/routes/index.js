const router = require('express').Router();

router.get('/login', (req, res) => {
    res.render('../views/login.hbs');
});
router.get('/register', (req, res) => {
    res.render('../views/register.hbs');
});
router.get('/', (req, res) => {
    res.render('../views/partials/');
});
module.exports=router;