import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Formulario from './components/Formulario';
import Asesorias from './components/Asesorias';
import Talleres from './components/Talleres';
import './App.css';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/asesorias" element={<Asesorias />} />
        <Route path="/talleres" element={<Talleres />} />
      </Routes>
    </>
  );
}

export default App;
