import React from "react";
import Flux from "react-flux-dash";
import { Link, Router } from "react-router-dom";
import './App.css';

var pizzas= [{nombre:"Pizza con piña",foto:'pizza1.jpg'},{nombre:"Pizza con pepperoni",foto:'pizza2.webp'},{nombre:"Pizza napolitana",foto:'pizza3.jpg'},{nombre:"Pizza de camarones",foto:"pizza4.jpg"}];


export default class App extends Flux.View {
  render(){
  return (
    

    <div className="App">
      
    <header className="App-header">       
      YEY :D

        
    </header>

</div>
  );
}
}
function Home() {
  return (<h2>Home</h2>);
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
