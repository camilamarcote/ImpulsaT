import React, { useState } from 'react';

function Formulario() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    consulta: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
     const response = await fetch('http://localhost:5000/api/contacto', {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        setFormData({ nombre: '', email: '', consulta: '' });
      } else {
        alert('Error al enviar formulario');
      }
    } catch (error) {
      alert('Error de red o servidor');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Contáctanos</h2>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="form-control"
            placeholder="Ingresa tu nombre"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Ingresa tu correo electrónico"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Consulta</label>
          <textarea
            name="consulta"
            value={formData.consulta}
            onChange={handleChange}
            className="form-control"
            placeholder="Escribe tu consulta"
            rows={4}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Formulario;
