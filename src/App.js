import './App.css';
import React, { Component } from 'react';
import GameWindow from './components/gameWindow';
function buttonClick(){
  alert('button was clicked');
}


function App() {
    return (
      <div><GameWindow/></div>
      
    );
}

export default App;
