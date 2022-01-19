import './App.css';
import CharBox from './components/characterBox';
import CharList from './components/charList';
import WordBox from './components/wordBox';
import WordList from './components/wordList';
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
