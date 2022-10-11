const {Router} = require('express');
const {check} = require('express-validator');
const { 
    existeEmail,
    existeUsuarioId
    } = require('../helpers/dbValidators');
const { 
    usuariosGet,
    usuariosDelete,
    usuariosPost,
    usuariosPatch,
    usuariosPut 
    }=require('../controllers/user');
const { validarCampos, validarjwt, tieneRol, esAdminRole} = require('../middlewares');
const router = Router();
router.get('/', usuariosGet);
router.post(
                '/',
                [
                    check('correo').custom(existeEmail),
                    check('correo', 'el correo no sirve').isEmail(),
                    check('nombre', 'necesita nombre').not().isEmpty(),
                    check('password', 'no sirve la contra').isLength({min:6}),
                    validarCampos
                ],
                usuariosPost 
            );
router.put(
                '/:id',
                [
                    check('id', 'no es un mongo id').isMongoId(),
                    check('id').custom(existeUsuarioId),
                    validarCampos
                ]
                ,
                usuariosPut
            );
router.delete(
                '/:id', 
                [
                    validarjwt,
                    tieneRol('ADMIN_ROL'),
                    //esAdminRole,                    
                    check('id', 'no es un mongo id').isMongoId(),
                    check('id').custom(existeUsuarioId),
                    validarCampos
                ],
                usuariosDelete
            );
module.exports=router;