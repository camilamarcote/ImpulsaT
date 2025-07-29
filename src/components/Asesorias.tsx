import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Asesorias() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" data-aos="fade-right">Asesoramiento para Empresas</h2>
      <p className="text-justify">
        Ofrecemos acompañamiento estratégico para optimizar el rendimiento de equipos, mejorar el clima laboral y apoyar a las organizaciones en sus procesos de desarrollo humano y organizacional.
      </p>
    </div>
  );
}

export default Asesorias;
