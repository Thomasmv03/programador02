var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', async (req, res, next) => {
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var telefono = req.body.phone;
  var mensaje = req.body.message;

  console.log(req.body)

  var obj = {
    to: 'thomi14mgg@gmail.com',
    subject: 'contacto desde la web',
    html: nombre + apellido + "se contacto a traves y quiere mas info de este correo:" + email +  ". <br> Ademas hizo el siguiente comentario" + message + ". <br> su tel es telefono " + phone
  }

  var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })

  var info = await transporter.sendMail(obj);

  res.render('index', {
    message: "Mnesaje enviado correctamente",
  });
});
module.exports = router;