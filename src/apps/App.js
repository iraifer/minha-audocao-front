import React from 'react';
import './App.css';
import Header from '../components/Header';
import Home from '../components/Home';
import Pets from '../components/PetsDisponiveis'
import Encontre from '../components/EncontreAmigo';
import EventosHome from '../components/EventosHome';
import FrameCao from '../components/FrameCao';
import Contate from '../components/Contate';
import Footer from '../components/Footer';


function App() {
  console.log('I was triggered during render')
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
