import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido/a a Trippy!" />
      {/* Resto del contenido de la aplicación */}
    </div>
  );
}