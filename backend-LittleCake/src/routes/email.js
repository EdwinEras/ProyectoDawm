const router = require('express').Router();
var nodemailer = require('nodemailer');

//Creamos el objeto de transporte
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'servidorlittlecake@gmail.com',
    pass: 'servidorprueba'
  }
});

router.post('/email',(req, res)=>{
    const {nombre,apellido,edad,correoElectronico,ciudad,fechaNacimiento,detalle}=req.body;

    var mailOptions = {
      from: correoElectronico,
      to: 'darybarce16@gmail.com',
      subject: nombre  + ' ' + apellido + ' ' +  ciudad + ' ' + edad ,
      text: detalle 
    };

    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email enviado: ' + info.response);
        }
      });
      res.json({'respuesta':'enviado con exito'});
});
router.get('/' , (req, res)=>{
//res.json({'respuesta':'hola'});
});


module.exports = router;