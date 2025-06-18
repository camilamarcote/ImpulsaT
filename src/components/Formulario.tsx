import React, { useState } from 'react';

function Formulario() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    consulta: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Nombre: ${formData.nombre}\nEmail: ${formData.email}\nConsulta: ${formData.consulta}`);
    setFormData({ nombre: '', email: '', consulta: '' });
  };

  return (
    <div className="container mt-5">
      <h2>Formulario de contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            placeholder="Tu nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="tu@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="consulta" className="form-label">Consulta</label>
          <textarea
            className="form-control"
            id="consulta"
            placeholder="Escribe tu consulta aquí..."
            rows={4}
            value={formData.consulta}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;
