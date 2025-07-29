const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Configurar transporter de nodemailer (ejemplo con Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'marcotecamila@gmail.com', // tu email real
    pass: 'wwxd gmuw seme rqpe', // contraseña o app password de Gmail
  },
});

// Ruta POST para recibir formulario
app.post('/api/contacto', async (req, res) => {
  const { nombre, email, consulta } = req.body;

  const mailOptions = {
    from: email,
    to: 'marcotecamila@gmail.com', // email donde recibes los mensajes
    subject: 'Nuevo mensaje de contacto',
    text: `Nombre: ${nombre}\nEmail: ${email}\nConsulta: ${consulta}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: 'Formulario enviado y mail recibido!' });
  } catch (error) {
    console.error('Error enviando email:', error);
    res.status(500).json({ message: 'Error enviando email' });
  }
});

// Levantar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
