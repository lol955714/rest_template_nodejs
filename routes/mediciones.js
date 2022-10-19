const { Router } = require('express');
const { validarjwt } = require('../middlewares');
const { getUserQuery } = require('../controllers/mediciones');
const router = Router();

router.get('/queryUser', [validarjwt], getUserQuery);

module.exports = router;