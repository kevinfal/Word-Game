import React, { Component } from 'react';
import CharBox from './characterBox';
import CharList from './charList';
import WordList from './wordList';

class GameWindow extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            char: '',
            boxChars: ['来','不','及'], //list of chars to use
            charKeys: [], //key for each char, counts up to length
            charsVisible: [true, true, true], //determines which chars are visible in charBox
            wordChars: []
            
        };
        this.makeCharKeys(); //construct charKeys
        console.log(this.state.charKeys);
    }

    makeCharKeys(){
        for(var i = 0; i <this.state.boxChars.length; i++){
            this.state.charKeys.push(i);
        }
    }

    addWordChar= (arr) => {
            this.setState({char: arr[0]});
            this.state.wordChars.push(arr[0]);
            //alert(this.state.wordChars);
    }
    render() { 
        return ( 
        <div>
            <button> start </button>
            <CharList 
            chars = {this.state.boxChars}
            parentCallback = {this.addWordChar}
            keys = {this.state.charKeys}
            charsVisible = {this.state.charsVisible}
            />
            <h2>{this.state.char}</h2>
            <button> reroll </button>
            <div>
                word of the turn: 
                <div>{this.state.wordChars}</div>
                <WordList wordChars = {this.state.wordChars}/>
            </div>
        </div>
         );
    }
}

 
export default GameWindow;