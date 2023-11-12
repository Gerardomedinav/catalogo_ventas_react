import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import abrigos from '../src/img/abrigos.jpg';
import conjunto_adultos from '../src/img/conjunto_adultos.jpg';
import conjunto_niño from '../src/img/conjunto_niño.jpg'
import conjunto_niño_futbol from '../src/img/conjunto_niño_futbol.jpg'
import botines from '../src/img/botines.jpg'
import camicetas from '../src/img/camicetas.jpg'
const productos = [
  { id: 1, nombre: 'Abrigos', precio: 10.99, imagen: abrigos, descripcion: 'Buso de Algodon para hombre' },
  { id: 2, nombre: 'Conjuntos Adulto', precio: 19.99, imagen: conjunto_adultos, descripcion: 'Conjunto Deportivos adulto' },
  { id: 3, nombre: 'Conjunto Niño', precio: 19.99, imagen: conjunto_niño, descripcion: 'Conjunto deportivo largo de niño' },
  { id: 4, nombre: 'Conjunto Futbol', precio: 19.99, imagen: conjunto_niño_futbol, descripcion: 'Conjuntos de futbol para niños' },
  { id: 5, nombre: 'Botines', precio: 19.99, imagen: botines, descripcion: 'Botines para niños y grandes' },
  { id: 6, nombre: 'Camicetas', precio: 19.99, imagen: camicetas, descripcion: 'camicetas de todos los clubes' },
  // ... más productos
];

function App() {
  return (
    <main className="App">
      <div className="cards-container">
        {productos.map((producto) => (
          <div key={producto.id} className="card" style={{ width: '18rem' }}>
            <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text">Precio: ${producto.precio.toFixed(2)}</p>
              <p className="card-text">Descripcion: {producto.descripcion}</p>
             <button onClick={()=>console.log("Hizo una compra")}>Comprar </button>
            </div>
          </div>

        ))}
      </div>

    </main>
  );
}

export default App;

