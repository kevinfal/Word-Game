import './App.css';
import React, { Component } from 'react';
import GameWindow from './components/gameWindow';
import text from './data/data';

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    data: '',
    words: '',
    characters: '',
  }
  componentDidMount(){
    this.initData();
    console.log("initialized");
    console.log(this.state.data);
  }
  initData(){
    //fetch from url
      fetch(`http://localhost:3001/data`)
       .then((response) => response.json()) //make response into json
       .then((jsonObjs) => {
         this.setState({data: jsonObjs});
         this.setState({words: jsonObjs.words});
         this.setState({characters: jsonObjs.characters});
         console.log("recieved");
       }); //set state as jsonObjects
      console.log("out of .then");
      //const display = this.state.data.map((item) => <p>{item.body}</p>)
  }
  generateCharList(){
    var returned = [];
    var chars = this.state.characters
    var len = this.state.characters.length
    for(var i = 0; i < 10; i ++){
      returned.push(chars.charAt(i));
      // var added = chars.charAt(Math.floor(Math.random() * len));
      // while(returned.includes(added))
      //   added = chars.charAt(Math.floor(Math.random() * len))
      // returned.push(added);
      
    }
    console.log("expected:");
    console.log(returned);
    console.log("huh");
    console.log([ "的", "一", "是", "不", "了", "在", "人", "有", "我", "他" ]);
    return returned;
  }
  render() {
    console.log(this.state.characters);
    const charlist =this.generateCharList()
    return (
      <div>
        <GameWindow 
        charList = {charlist}/> 
      </div>
);
  }
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
