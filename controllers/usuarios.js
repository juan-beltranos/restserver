const { response } = require("express");

const usuariosGet = (req, res = response) => {

    const query = req.query;

    res.json({
        ok: true,
        msg: "Get api - controlador",
        query
    });
};

const usuariosPost = (req, res = response) => {
  const body = req.body;

  res.json({
    ok: true,
    msg: "Post api  - controlador",
    body,
  });
};

const usuariosPut = (req, res = response) => {

  const id = req.params.id;

  res.json({
    ok: true,
    msg: "Put api  - controlador",
    id
  });

};

const usuariosPatch = (req, res = response) => {
  res.json({
    ok: true,
    msg: "Patch api  - controlador",
  });
};

const usuariosDelete = (req, res = response) => {
  res.status(400).json({
    ok: true,
    msg: "Delete api  - controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPatch,
  usuariosPut,
  usuariosDelete,
};
