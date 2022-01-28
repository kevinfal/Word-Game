import React, { Component } from 'react';
import CharBox from './characterBox';
import CharList from './charList';
import WordBox from './wordBox';
import WordList from './wordList';

class GameWindow extends Component {
    constructor(props) {
        super(props);
        this.makeCharBoxList = this.makeCharBoxList.bind(this);
        this.makeCharKeys = this.makeCharKeys.bind(this);
        this.addWordChar = this.addWordChar.bind(this);
        this.state = { 
            char: '', //this is for debugging
            wordChar: '', //this is also for debugging
            chars: ['来','不','及'], //list of chars to use
            keys: [], //key for each char, counts up to length
            charBoxes: [], //holds visible boxes
            invisibleChar: [], //holds invisible boxes
            invisibleWord: [], //holds invisible wordChars
            wordBoxes: [], //replace later
            wordChars: [], //this is for debug

        };
        this.state.keys = this.makeCharKeys();
        this.state.charBoxes = this.makeCharBoxList();
        this.state.invisibleWord = this.makeWordBoxList(); //switch from wordBoxes to invisibleWord for testing
        this.setState({charBoxes: this.makeCharBoxList()});

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
        return listItems;
    }

    makeWordBoxList(){
        const listItems = [];
        for(var i = 0; i < this.state.chars.length; i++){
            listItems.push(
                <CharBox
                char = {this.state.chars[i]}
                key = {this.state.keys[i]}
                id = {this.state.keys[i]}
                parentCallback = {this.removeWordChar}
                />
            )
        
        }

        return listItems;
    }
    /**
     * Parent callback from charList
     * @param {*array} arr [char, int id]
     */
    addWordChar = (arr) => {

            //get the box that was clicked
            const clicked = this.state.charBoxes.filter((box) => box.props.id === arr[1]);
            //push it to invisibleChars
            this.state.invisibleChar.push(clicked);
            //remove from visible boxes
            const newList = this.state.charBoxes.filter((box) => box.props.id !== arr[1]);
            this.state.charBoxes = newList;

            //get wordBox with same ID from invisibleWord
            const invisibleBox =  this.state.invisibleWord.filter((box) => box.props.id === arr[1]);
            //add invisible to wordBoxes
            this.state.wordBoxes.push(invisibleBox);
            //remove from invisible
            const newList2 = this.state.invisibleWord.filter((box) => box.props.id !== arr[1]);
            this.state.invisibleWord = newList2;

            this.setState({char: arr[0]}); //sets char, for debugging
            this.state.wordChars.push(arr[0]); //this is also for debugging
            //alert(this.state.wordChars);
    }
    removeWordChar = (arr) => {
            //get the wordBox that was clicke
            
            const clicked = this.state.wordBoxes.filter((box) => box.props.id === arr[1]);
            this.state.invisibleWord.push(clicked);

            //get rid of box that was clicked from wordList
            const newList = this.state.wordBoxes.filter((box) => box.props.id !== arr[1]);
            this.state.wordBoxes = newList;

            //get CharBox with same ID from invisibleChar
            const invisibleCharBox = this.state.invisibleChar.filter((box) => box.props.id === arr[1]);
            //move from invisible to CharBoxes
            this.state.charBoxes.push(invisibleCharBox);


            //this.setState({char: arr[0]}); //sets char, for debugging
            this.setState({char: arr[0]});//this is the key to updating the boxes
            this.state.wordChars.push(arr[0]); //this is also for debugging
    }
    //
    render() { 
        return ( 
        <div>
            <button> start </button>
            <CharList 
            charBoxes = {this.state.charBoxes}
            keys = {this.state.keys}
            />
            <h2>{this.state.char}</h2>
            <button> reroll </button>
            <div>
                word of the turn: 
                <div>{this.state.wordChars}</div>
                <WordList
                wordBoxes = {this.state.wordBoxes}
                keys = {this.state.keys}/>
            </div>
        </div>
         );
    }
}

/**
 * in the future
 * switch from passing around an object to passing
 * around the ID to the object
 */
 
export default GameWindow;