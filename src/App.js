import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react'
import NavBar from './Components/NavBar/NavBar';
import ItemListConteiner from './Components/landingPage/ItemListConteiner';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

      
  return (
    <div>
      <NavBar/>
      <ItemListConteiner bienvenida='Nuestro Catalogo'/>
    </div>
  )
}

export default App;
