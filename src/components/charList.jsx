import React, { Component } from 'react';
/**
 * Contains all of CharBoxes that are used to construct
 * words in the game
 */
class CharList extends Component {
    constructor(props){
        super(props)
        this.state = {
            //char to pass to gameWindow to update word
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
        //this is defunct now,  does not pass o gamewindow
        this.setState({char: arr[0]});//sets char, for debugging

        //sends array to GameWindow, signals to add char to word
        this.props.parentCallback(arr);
    }
    render() { 
        const listItems = this.props.charBoxes;
        
        return (
        <div className = "flexRow">
           
            {listItems}
        </div>
        );
    }
}
 
export default CharList;