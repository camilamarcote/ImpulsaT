import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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

      {/* SECCIÓN INICIO */}
      <section id="inicio">
        <h1 className="text-center mb-4 mt-5">Bienvenidos a ImpulsaT</h1>
        <div className="row align-items-center">
          <div className="col-md-7">
            <p className="text-justify mt-4">
              <strong>ImpulsaT – Psicología para el desarrollo personal y profesional</strong><br />
            En ImpulsaT creemos que cada persona y cada organización tienen un potencial único. Nuestro propósito es acompañar esos procesos de descubrimiento, crecimiento y transformación desde una mirada integral, que contempla tanto lo laboral como lo personal.<br /><br />
            Trabajamos con quienes buscan orientación para tomar decisiones, desarrollar su carrera, fortalecer su bienestar emocional o atravesar momentos de cambio. También acompañamos a empresas que desean potenciar sus equipos, mejorar el clima laboral o consolidarse como empleadores atractivos.<br /><br />
            Desde la psicología clínica y organizacional, ofrecemos espacios de escucha, intervención y herramientas adaptadas a cada necesidad. Entendemos que el desarrollo profesional y el bienestar emocional están profundamente conectados, y por eso abordamos cada proceso con una perspectiva amplia, humana y comprometida.<br /><br />
            Creemos que el cambio auténtico nace desde adentro. Nuestro rol es acompañar, guiar y facilitar, pero el verdadero trabajo —y el mérito— es de quienes se animan a transitar ese camino.<br /><br />
            En ImpulsaT brindamos un espacio profesional, cercano y personalizado, pensado para impulsar el crecimiento personal y profesional de quienes nos eligen.
            </p>
           
          </div>
          <div className="col-md-5 text-center" data-aos="fade-down">
            <img
              src="https://res.cloudinary.com/dm1gsxyaw/image/upload/v1750289976/WhatsApp_Image_2025-06-18_at_20.38.49_eoka06.jpg"
              alt="Logo Visual"
              className="img-fluid"
              style={{ maxHeight: '300px', marginLeft: '100px' }}
            />
          </div>
        </div>
      </section>

      {/* SECCIÓN ASESORÍAS */}
      <section id="asesorias" className="my-5">
        <h2 className="text-center mb-4">Asesoramiento para Empresas</h2>
        <p className="text-justify">
           Ofrecemos acompañamiento estratégico para optimizar el rendimiento de equipos, mejorar el clima laboral y apoyar a las organizaciones en sus procesos de desarrollo humano y organizacional.
        </p>
      </section>

      {/* SECCIÓN TALLERES */}
      <section id="talleres" className="my-5">
        <h2 className="text-center mb-4">Talleres y Capacitaciones</h2>
        <p className="text-justify">
           Diseñamos talleres prácticos para fortalecer habilidades personales y profesionales, promover el bienestar emocional y fomentar la cohesión en equipos de trabajo.
        </p>
      </section>

      {/* SECCIÓN FORMULARIO */}
      <section id="contacto" className="my-5">
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
              rows={4}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Enviar</button>
        </form>
      </section>
    </div>
  );
}

export default Home;
