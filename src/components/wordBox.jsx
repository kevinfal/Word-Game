import React, { Component } from 'react';

/**
 * Contains The Boxes with the characters that
 * make up the word of the turn
 */
class WordBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            visible: [],
            invisible: [],
        }
    }
    handleClick = (e) => {
        this.props.parentCallback(
            [this.props.char,this.props.id]
            );
    };
    render() { 
        
        return (
        <div>
             <div className = "rectangle" onClick = {this.handleClick}>
             <p>{this.props.char}</p>
             </div>
        </div>);
    }
}
 
export default WordBox;