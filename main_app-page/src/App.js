import './App.css';
var pizzas= [{nombre:"Pizza con piña",foto:'pizza1.jpg'},{nombre:"Pizza con pepperoni",foto:'pizza2.webp'},{nombre:"Pizza napolitana",foto:'pizza3.jpg'},{nombre:"Pizza de camarones",foto:"pizza4.jpg"}];
var foto='helado.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        Seleccione su pizza
        <p>Para seleccionar su </p>
        <p>pizza de super calidad </p>
        <p>haga click en la imagen</p>
        <p>de la pizza que desea</p>
        {pizzas.map((pizza, index) => (
          
          <p>
            <p>{pizza.nombre}</p>
          <img src={pizza.foto} alt="foto" style={{height: 500, width: 500}}/>
           </p>
          ))
        }

          
      </header>
      
    </div>
  );
}


function cambio(imagen){
  foto= imagen
}
export default App;
