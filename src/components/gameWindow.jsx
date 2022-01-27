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
        this.state.wordBoxes = this.makeWordBoxList();
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
            this.state.invisibleChar.push(clicked);
            //
            const newList = this.state.charBoxes.filter((box) => box.props.id !== arr[1]);
            this.state.charBoxes = newList;

            this.setState({char: arr[0]}); //sets char, for debugging
            this.state.wordChars.push(arr[0]); //this is also for debugging
            //alert(this.state.wordChars);
    }
    removeWordChar = (arr) => {
            //alert("hapen");
            const clicked = this.state.wordBoxes.filter((box) => box.props.id === arr[1]);
            console.log(clicked);
            this.state.invisibleWord.push(clicked);
            console.log(this.state.invisibleWord);
            //get rid of box that was clicked from wordList
            const newList = this.state.wordBoxes.filter((box) => box.props.id !== arr[1]);
            this.state.wordBoxes = newList;

            //this.setState({char: arr[0]}); //sets char, for debugging
            this.setState({char: arr[0]});
            this.state.wordChars.push(arr[0]);
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

 
export default GameWindow;