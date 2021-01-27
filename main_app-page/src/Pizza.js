import './App.css';
var pizzas= [{nombre:"pizza 1",foto:'helado.jpg'},{nombre:"pizza 2",foto:'Pizza-con-pepperoni.webp'}];
var foto='helado.jpg'
function App() {
  return (
    <div className="App">
      <header className="App-header">  

          <img src={foto} alt="foto fea"/>
  
      </header>
      
    </div>
  );
}
function cambio(imagen){
  foto= imagen
}
export default App;