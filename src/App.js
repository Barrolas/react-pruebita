import logo from './logo.svg';
import './App.css';
import NavbarPagina from './components/Navbar';
import CarouselPagina from './components/Carousel';
import CalculadoraRemuneracion from './components/CalculadoraRemuneracion';

function App() {
  return (
    <div className="App">
      <header>
        <NavbarPagina />
        <CarouselPagina />
      </header>

      <main>
        <div className="container">
          <CalculadoraRemuneracion />
        </div>
      </main>

      <footer>
        <div className="container mt-3">
          <p>Derechos reservados &copy; 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
