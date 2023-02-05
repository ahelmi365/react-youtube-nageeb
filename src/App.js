import './App.css';
import CardsList from './Components/CardsListComponent/CardsList';
import React from 'react';
import SingUp from './Components/SingUp/SingUp';
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar';

function App() {


  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path='/' element={<CardsList />} />
        <Route path='/signup' element={<SingUp />} />
        {/* <Route path='/login' element={}/> */}


      </Routes>
    </div>
  );
}

export default App;
