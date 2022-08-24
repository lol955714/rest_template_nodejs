const {Router} = require('express');
const {check} = require('express-validator');
const {login }= require('../controllers/auth');
const { existeEmail } = require('../helpers/dbValidators');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();
router.post(
            '/login',
            [
                check('correo', 'el correo no sirve').isEmail(),
                check('password', 'no sirve la contra').not().isEmpty(),
                validarCampos
            ],
            login
            );
module.exports=router;