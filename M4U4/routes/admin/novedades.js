var express = require('express');
var router = express.Router();
var usuariosModel = require('../../models/usuariosModel');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('admin/novedades', {
      layout:'admin/layout'
  });
});




module.exports = router;
