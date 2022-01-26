import React, { Component } from 'react';
import CharBox from './characterBox';
import CharList from './charList';
import WordList from './wordList';

class GameWindow extends Component {
    constructor(props) {
        super(props);
        this.makeCharBoxList = this.makeCharBoxList.bind(this);
        this.makeCharKeys = this.makeCharKeys.bind(this);
        this.addWordChar = this.addWordChar.bind(this);
        this.state = { 
            char: '', //this is for debugging
            chars: ['来','不','及'], //list of chars to use
            keys: [], //key for each char, counts up to length
            invisible: [true, true, true], //determines which chars are visible in charBox
            charBoxes: [], //holds visible boxes
            invisible: [], //holds invisible boxes
            wordChars: [], //replace later

        };
        this.state.keys = this.makeCharKeys();
        this.state.charBoxes = this.makeCharBoxList();

        this.setState({charBoxes: this.makeCharBoxList()});
        //alert(this.state.keys);
        //this.state.keys =  //construct charKeys
        //this.state.charBoxes = this.makeCharBoxList();
        //console.log(this.state.charKeys);
    }
    /**
     * Makes list of keys to assign to the CharBoxes in state
     * Only used in constructor
     */
    makeCharKeys(){
        const returned = [];
        for(var i = 0; i <this.state.chars.length; i++){
            returned.push(i);
        }
        //alert(returned);
        return returned;
    }
    
    makeCharBoxList(){
        const listItems = [];
        for(var i = 0; i < this.state.chars.length; i++){
            listItems.push(
                <CharBox
                char = {this.state.chars[i]}
                key = {this.state.keys[i]}
                id = {this.state.keys[i]}
                parentCallback = {this.addWordChar}
                />
            )
        
        }
        // const listItems = this.props.chars.map((d) => <
        // CharBox char = {d} 
        // parentCallback = {this.modifyMessage}
        //
        // />);
        return listItems;
    }
    /**
     * Parent callback from charList
     * @param {*array} arr [char, int id]
     */
    addWordChar = (arr) => {
            const clicked = this.state.charBoxes.filter((box) => box.props.id === arr[1]);
            this.state.invisible.push(clicked);
            //
            const newList = this.state.charBoxes.filter((box) => box.props.id !== arr[1]);
            this.state.charBoxes = newList;

            this.setState({char: arr[0]}); //sets char, for debugging
            this.state.wordChars.push(arr[0]);
            //alert(this.state.wordChars);
    }
    removeWordChar = (arr) => {
        
    }
    //
    render() { 
        return ( 
        <div>
            <button> start </button>
            <CharList 
            charBoxes = {this.state.charBoxes}
            chars = {this.state.ch}
            parentCallback = {this.addWordChar}
            keys = {this.state.keys}
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