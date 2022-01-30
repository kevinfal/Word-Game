import React, { Component } from 'react';
import CharBox from './characterBox';
import CharList from './charList';
import WordBox from './wordBox';
import WordList from './wordList';

/*
    todo: 
        -render boxes from id
        -on click remove id from char/wordbox 
            to other array
        -update state, re-render


*/
class GameWindow extends Component {
    constructor(props) {
        super(props);
        this.makeCharBoxList = this.makeCharBoxList.bind(this);
        this.makeCharKeys = this.makeCharKeys.bind(this);
        this.addWordChar = this.addWordChar.bind(this);
        this.makeIds = this.makeIds.bind(this);
        this.state = { 
            charsAmt: 3, //change later
            ids: {}, //dict for id #: char
            charListIds: [],
            wordListIds: [],

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
        //todo: getchars from some list
        this.makeIds();


        //replace later
        this.state.keys = this.makeCharKeys();
        //this.state.charBoxes = this.makeCharBoxList();
        this.state.invisibleWord = this.makeWordBoxList(); //switch from wordBoxes to invisibleWord for testing
        this.setState({charBoxes: this.makeCharBoxList()});

    }

    /**
     * init charListIds and state IDs
     */
    makeIds(){
        for(var i = 0; i < this.state.chars.length; i++){
            this.state.ids[i] = this.state.chars[i];
            this.state.charListIds.push(i);
        }
    }

    /**
     * 
     * @param {*array} arr - array of ids (from)
     * @param {*int} flag  - 0 means make char box, 1 means make word box
     * @returns 
     */
    renderBoxes(arr, flag){
        const listItems = [];
        for(var i = 0; i < arr.length; i++){
            
            listItems.push(
                <CharBox
                char = {this.state.ids[arr[i]]}
                key = {arr[i]}
                id = {arr[i]}
                
                parentCallback = {flag === 0 ? this.addWordChar : this.removeWordChar}
                />
            )
        
        }
        return listItems;
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
            this.state.wordListIds.push(arr[1]);

            this.setState({charListIds: this.state.charListIds.filter((id) =>  id !== arr[1])})

            // //get the box that was clicked
            // const clicked = this.state.charBoxes.filter((box) => box.props.id === arr[1]);
            // //push it to invisibleChars
            // this.state.invisibleChar.push(clicked);
            // //remove from visible boxes
            // const newList = this.state.charBoxes.filter((box) => box.props.id !== arr[1]);
            // this.state.charBoxes = newList;

            // //get wordBox with same ID from invisibleWord
            // const invisibleBox =  this.state.invisibleWord.filter((box) => box.props.id === arr[1]);
            // //add invisible to wordBoxes
            // this.state.wordBoxes.push(invisibleBox);
            // //remove from invisible
            // const newList2 = this.state.invisibleWord.filter((box) => box.props.id !== arr[1]);
            // this.state.invisibleWord = newList2;

            // this.setState({char: arr[0]}); //sets char, for debugging
            // this.state.wordChars.push(arr[0]); //this is also for debugging
            // //alert(this.state.wordChars);
    }
    removeWordChar = (arr) => {
            this.state.charListIds.push(arr[1]);

            this.setState({wordListIds: this.state.wordListIds.filter((id) =>  id !== arr[1])})
            // //get the wordBox that was clicke
            
            // const clicked = this.state.wordBoxes.filter((box) => box.props.id === arr[1]);
            // this.state.invisibleWord.push(clicked);

            // //get rid of box that was clicked from wordList
            // const newList = this.state.wordBoxes.filter((box) => box.props.id !== arr[1]);
            // this.state.wordBoxes = newList;

            // //get CharBox with same ID from invisibleChar
            // const invisibleCharBox = this.state.invisibleChar.filter((box) => box.props.id === arr[1]);
            // //move from invisible to CharBoxes
            // this.state.charBoxes.push(invisibleCharBox);


            // //this.setState({char: arr[0]}); //sets char, for debugging
            // this.setState({char: arr[0]});//this is the key to updating the boxes
            // this.state.wordChars.push(arr[0]); //this is also for debugging
    }
    //
    render() { 
        const charListBoxes = this.renderBoxes(this.state.charListIds, 0); //render boxes from ID
        const wordListBoxes = this.renderBoxes(this.state.wordListIds, 1);
        return ( 
            
        <div>
            <button> start </button>
            <CharList 
            charBoxes = {charListBoxes}
            keys = {this.state.keys}
            />
            <h2>{this.state.char}</h2>
            <button> reroll </button>
            <div>
                word of the turn: 
                <div>{this.state.wordChars}</div>
                <WordList
                wordBoxes = {wordListBoxes}
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