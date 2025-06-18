import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5">
      <h1>Bienvenidos a Impulsate</h1>
      <p>ImpulsaT – Psicología para el desarrollo personal y profesional
ImpulsaT – Psicología para el desarrollo personal y profesional
En ImpulsaT creemos que cada persona y cada organización tienen un potencial único. Nuestro propósito es acompañar esos procesos de descubrimiento, crecimiento y transformación desde una mirada integral, que contempla tanto lo laboral como lo personal.

Trabajamos con quienes buscan orientación para tomar decisiones, desarrollar su carrera, fortalecer su bienestar emocional o atravesar momentos de cambio. También acompañamos a empresas que desean potenciar sus equipos, mejorar el clima laboral o consolidarse como empleadores atractivos.

Desde la psicología clínica y organizacional, ofrecemos espacios de escucha, intervención y herramientas adaptadas a cada necesidad. Entendemos que el desarrollo profesional y el bienestar emocional están profundamente conectados, y por eso abordamos cada proceso con una perspectiva amplia, humana y comprometida.

Creemos que el cambio auténtico nace desde adentro. Nuestro rol es acompañar, guiar y facilitar, pero el verdadero trabajo —y el mérito— es de quienes se animan a transitar ese camino.

En ImpulsaT brindamos un espacio profesional, cercano y personalizado, pensado para impulsar el crecimiento personal y profesional de quienes nos eligen.</p>

      <button
        className="btn btn-primary btn-lg"
        onClick={() => navigate('/formulario')}
      >
        Comenzar
      </button>
    </div>
  );
}

export default Home;
