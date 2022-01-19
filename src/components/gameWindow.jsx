import React, { Component } from 'react';
import CharList from './charList';
import WordList from './wordList';

class GameWindow extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            char: '',
            boxChars: ['来','不','及'],
            wordChars: []
        };
    }

    addWordChar= (data) => {
            this.setState({char: data});
            this.state.wordChars.push(data);
            //alert(this.state.wordChars);
    }
    render() { 
        return ( 
        <div>
            <button> start </button>
            <CharList 
            chars = {this.state.boxChars}
            parentCallback = {this.addWordChar}/>
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