import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Home() {
  const navigate = useNavigate();

  // Inicializar AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 mt-5">Bienvenidos a ImpulsaT</h1>

      <div className="row align-items-center">
        {/* Texto justificado */}
        <div className="col-md-7">
         <p className="text-justify mt-4">
            <strong>ImpulsaT – Psicología para el desarrollo personal y profesional</strong><br />
            En ImpulsaT creemos que cada persona y cada organización tienen un potencial único. Nuestro propósito es acompañar esos procesos de descubrimiento, crecimiento y transformación desde una mirada integral, que contempla tanto lo laboral como lo personal.<br /><br />
            Trabajamos con quienes buscan orientación para tomar decisiones, desarrollar su carrera, fortalecer su bienestar emocional o atravesar momentos de cambio. También acompañamos a empresas que desean potenciar sus equipos, mejorar el clima laboral o consolidarse como empleadores atractivos.<br /><br />
            Desde la psicología clínica y organizacional, ofrecemos espacios de escucha, intervención y herramientas adaptadas a cada necesidad. Entendemos que el desarrollo profesional y el bienestar emocional están profundamente conectados, y por eso abordamos cada proceso con una perspectiva amplia, humana y comprometida.<br /><br />
            Creemos que el cambio auténtico nace desde adentro. Nuestro rol es acompañar, guiar y facilitar, pero el verdadero trabajo —y el mérito— es de quienes se animan a transitar ese camino.<br /><br />
            En ImpulsaT brindamos un espacio profesional, cercano y personalizado, pensado para impulsar el crecimiento personal y profesional de quienes nos eligen.
          </p>

          <button className="btn btn-primary btn-lg mt-3" onClick={() => navigate('/formulario')}>
            Comenzar
          </button>
        </div>

        {/* Imagen con fade-down */}
        <div className="col-md-5 text-center" data-aos="fade-down">
          <img
            src="https://res.cloudinary.com/dm1gsxyaw/image/upload/v1750289976/WhatsApp_Image_2025-06-18_at_20.38.49_eoka06.jpg"
            alt="Logo Visual"
            className="img-fluid"
            style={{ maxHeight: '300px', marginLeft: '100px'}}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
