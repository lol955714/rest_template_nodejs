const { Response, response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario').User;
const usuariosGet = async (req, res = response) => {
    const { count, rows } = await Usuario.findAndCountAll();
    res.json({
        count, rows
    });
}
const usuariosPost = async (req, res = response) => {
    let { nombre, correo, password } = req.body;
    const salt = bcrypt.genSaltSync();
    password = bcrypt.hashSync(password, salt);
    const username = `${nombre} ${correo}`;
    const usuario = await Usuario.create(
        {
            nombre,
            correo,
            password,
            username,
            estado: true
        }
    );
    res.json(usuario);
}
const usuariosPut = async (req, res = response) => {
    const { id } = req.params;
    const { _id, password, google, correo, ...resto } = req.body;
    if (password) {
        const salt = bcrypt.genSaltSync();
        resto.password = bcrypt.hashSync(password, salt);
    }
    const usuario = await Usuario.findByIdAndUpdate(id, resto);
    res.json(usuario);
}
const usuariosDelete = async (req, res = response) => {
    const { id } = req.params;
    const usuario = await Usuario.findByIdAndUpdate(id, { estado: false });
    res.json({
        usuario
    });
}
module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPost,
    usuariosPut
}