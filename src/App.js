import './App.css';
//import React, { Component } from 'react';
import GameWindow from './components/gameWindow';
import text from './data/data';

function App() {
  return (
    <div><GameWindow/></div>
    
  );
}
/*
todo:
  get chars from list (by frequency)
  get # of chars from input
  send those chars to new gamewindow
  check if word made is correct
  assign points
  make new gamewindow
*/
export default App;
