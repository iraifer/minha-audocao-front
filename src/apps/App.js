import React from 'react';
import './App.css';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import Pets from '../components/PetsDisponiveis/PetsDisponiveis'
import Encontre from '../components/EncontreAmigo/EncontreAmigo';
import EventosHome from '../components/EventosHome/EventosHome';
import FrameCao from '../components/FrameCao/FrameCao';
import Contate from '../components/Contate/Contate';
import Footer from '../components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Pets/>
      <Encontre/>
      <EventosHome/>
      <FrameCao/>
      <Contate/>
      <Footer/>
     </div>
  );
}

export default App;
