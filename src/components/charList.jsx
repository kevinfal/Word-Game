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
            char: ''
        };
    }
    modifyMessage= (boxChar) => {
        this.setState({char: boxChar});//sets state of this component
        //sends char to GameWindow, signals to add char to word
        this.props.parentCallback(boxChar);
    }
    render() { 
        const listItems = this.props.chars.map((d) => <
            CharBox char = {d} 
            parentCallback = {this.modifyMessage}
            />);
        return (
        <div className = "flexRow">
            <h1> {this.state.char} </h1>
            {listItems}
        </div>
        );
    }
}
 
export default CharList;