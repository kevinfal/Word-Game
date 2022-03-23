import React, { Component } from 'react';
import CharBox from './characterBox';
import CharList from './charList';
import WordList from './wordList';


class GameWindow extends Component {
    constructor(props) {
        super(props);
        this.makeCharKeys = this.makeCharKeys.bind(this);
        this.addWordChar = this.addWordChar.bind(this);
        this.makeIds = this.makeIds.bind(this);
        this.state = { 
            //ids: {}, //dict for id #: char
            charListIds: [],//
            wordListIds: [],
            //chars: [props.charList], //list of chars to use from parent
            keys: [], //key for each char, counts up to length
        };

    }
    componentDidMount(){
        this.makeIds();
        this.setState({keys: this.makeCharKeys()});
    }
    /**
     * init charListIds and state IDs
     */
    makeIds(){
        for(var i = 0; i < this.props.charList.length; i++){
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
                char = {this.props.ids[arr[i]]}
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
        for(var i = 0; i <this.props.charList.length; i++){
            returned.push(i);
        }
        return returned;
    }
    /**
     * Parent callback from charList
     * @param {*array} arr [char, int id]
     */
    addWordChar = (arr) => {
            this.state.wordListIds.push(arr[1]);
            this.setState({charListIds: this.state.charListIds.filter((id) =>  id !== arr[1])})
    }
    removeWordChar = (arr) => {
            this.state.charListIds.push(arr[1]);
            this.setState({wordListIds: this.state.wordListIds.filter((id) =>  id !== arr[1])})
    }
    //
    render() { 
        //constsruct boxes to render
        const charListBoxes = this.renderBoxes(this.state.charListIds, 0); 
        const wordListBoxes = this.renderBoxes(this.state.wordListIds, 1);
        console.log(this.props.charList);
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
export default GameWindow;