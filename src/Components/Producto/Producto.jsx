// Producto.jsx
import React from 'react';

const Producto = ({ producto }) => {
  
  return (
    <div className="card" style={{ width: '18rem', margin: '10px' }}>
      <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">Precio: ${producto.precio.toFixed(2)}</p>
        <p className="card-text">Descripción: {producto.descripcion}</p>
        <button onClick={()=>console.log(`Hizo una compra de ${producto.nombre}`)}>Comprar </button>
      </div>
    </div>
  );
};

export default Producto;
