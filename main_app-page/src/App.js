import React from "react";
import './App.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
var pizzas= [{nombre:"Pizza con piña",foto:'pizza1.jpg'},{nombre:"Pizza con pepperoni",foto:'pizza2.webp'},{nombre:"Pizza napolitana",foto:'pizza3.jpg'},{nombre:"Pizza de camarones",foto:"pizza4.jpg"}];



export default function App() {
  return (
    
    <div className="App">
      
    <header className="App-header">       
      Seleccione su pizza
      <p>Para seleccionar su </p>
      <p>pizza de super calidad </p>
      <p>haga click en el boton</p>
      <p>de la pizza que desea</p>


      

      {pizzas.map((pizza, index) => (
        
        <p>
        <p>
        <Popup trigger={<button> {pizza.nombre}</button>} position="right center">
        <div>
          <img src={pizza.foto} alt="foto" className="Image" style={{height: 500, width: 500}} />
          
          Su {pizza.nombre} esta en camino
          <img src={'repartidos.jpg'} alt="foto" className="Image" style={{height: 500, width: 500}} />
        </div>
        </Popup>
        </p>
        <img src={pizza.foto} alt="foto" className="Image" style={{height: 500, width: 500}} />
        </p>
        ))
      }

        
    </header>

</div>
  );
}
