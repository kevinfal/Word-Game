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
    console.log([ "的", "一", "是", "不", "了", "在", "人", "有", "我", "他" ]);
    console.log("returned");
    console.log(returned);
    return returned;
  }
  makeIds(charlist){
      var ids = {};
      for(var i = 0; i < charlist.length; i++){
          ids[i] = charlist[i];
      }
      return ids;
  }
  /**
   * proces array of n random numbers
   * @param {int} n - how many numbers to produce
   */
  randomNums(n){

  }

  render() {
    const chars = this.state.characters;
    console.log(chars);
    const charlist = [];
    const numbers = [0,1,2,3,4,5,6,7,8,9,10]
    for(var i = 0 ; i < numbers.length; i++){
      charlist.push(chars[numbers[i]]);
    }
    var ids = this.makeIds(charlist);

    return (
      <div>
        <GameWindow 
        charList = {charlist}
        numChars = {charlist.length}
        ids = {ids}/> 
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
