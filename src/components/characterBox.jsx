import React, { Component } from 'react';

/**
 * Basic Box with character within it
 * On Click add character to word
 */
class CharBox extends React.Component {
    constructor(props){
        super(props);
        //this.handleClick = this.handleClick.bind(this);
        //console.log(this.props);
    }
    handleClick = (e) => {
        this.props.parentCallback(this.props.char);
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

export default CharBox;
