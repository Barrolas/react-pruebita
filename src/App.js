import logo from './logo.svg';
import './App.css';
import NavbarPagina from './components/Navbar';
import CarouselPagina from './components/Carousel';
import GridCards from './components/CardGroup';
import { useState } from 'react';

function App() {
  const [sueldoBruto, setSueldoBruto] = useState(0);

  return (

    <div className="App">
      <NavbarPagina />
      <CarouselPagina />
      <main>
        <div className="container">
          <div className="row mt-3 bg-info text-white p-3">
            <div className="col-12">
              <h1>Bienvenido a nuestra agencia de viajes</h1>
              <p>Descubre los mejores destinos para tu próximo viaje</p>
            </div>

            {/*seccion de calculo remuneracion*/}

            <div className="row">
              <div className="col-lg-6">
                <h4>Datos Sueldo</h4>
                <label className="form-label" htmlFor="sueldoBruto">Ingrese el sueldo bruto</label>
                <input className="form-control" id="sueldoBruto" placeholder="100000000" type="text" 
                value={sueldoBruto} onChange={(e) => setSueldoBruto(e.target.value)} />
                
              </div>
              <div className="col-lg-6">
                <h4>Resultados</h4>
                <p>Sueldo Bruto: {sueldoBruto}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
