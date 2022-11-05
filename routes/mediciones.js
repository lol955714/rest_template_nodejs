const { Router } = require('express');
const { validarjwt } = require('../middlewares');
const { getUserQuery, obtenerSensores } = require('../controllers/mediciones');
const router = Router();

router.get('/queryUser', [validarjwt], getUserQuery);
router.get('/sensores', [validarjwt], obtenerSensores )

module.exports = router;