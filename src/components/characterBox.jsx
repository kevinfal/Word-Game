import React, { Component } from 'react';

/**
 * Basic Box with character within it, used to click on and
 * construct final word
 */
class CharBox extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        console.log(this.props);
    }
    handleClick(){
        alert("box wasa clicked");
    }
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
