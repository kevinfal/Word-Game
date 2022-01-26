import React, { Component } from 'react';
import CharBox from './characterBox';
/**
 * Contains all of CharBoxes that are used to construct
 * words in the game
 */
class CharList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            //char to pass to gameWindow to update word
            char: '',
            index: 0, // used to get the char, key, and visibility from props
       };
       //this.state.charBoxes = this.makeCharBoxList();
    }
    /**
     * Handles click from charBox
     * Gets array passed in [char,key]
     * passes to gameWindow
     * @param {*char, int key} arr 
     */
    modifyMessage= (arr) => {
        this.setState({char: arr[0]});//sets char, for debugging

        //sends array to GameWindow, signals to add char to word
        this.props.parentCallback(arr);
    }
    // makeCharBoxList(){
    //     const listItems = [];
    //     for(var i = 0; i < this.props.chars.length; i++){
    //         listItems.push(
    //             <CharBox
    //             char = {this.props.chars[i]}
    //             key = {this.props.keys[i]}
    //             id = {this.props.keys[i]}
    //             parentCallback = {this.modifyMessage}
    //             />
    //         )
    //     }

    //     return listItems;
    // }
    render() { 
        const listItems = this.props.charBoxes;
        return (
        <div className = "flexRow">
            <h1> {this.state.char} </h1>
            {listItems}
        </div>
        );
    }
}
 
export default CharList;