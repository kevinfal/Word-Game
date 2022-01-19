import React, { Component } from 'react';

/**
 * Contains The Boxes with the characters that
 * make up the word of the turn
 */
class WordBox extends React.Component {
    constructor(props){
        super(props);
    }
    render() { 
        return (
        <div >
             <div className = "rectangle">
             {this.props.char}
             </div>
        </div>);
    }
}
 
export default WordBox;