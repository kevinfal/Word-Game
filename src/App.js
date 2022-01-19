import './App.css';
import CharBox from './components/characterBox';
import CharList from './components/charList';
import WordBox from './components/wordBox';
import WordList from './components/wordList';
import React, { Component } from 'react';
function buttonClick(){
  alert('button was clicked');
}


function App() {
    return (
    <div>
        <button> start </button>
        <CharList/>
        <button> reroll </button>
        <div>
        word of the turn: 
        <WordList/>
        </div>
    </div>
    );
}

export default App;
