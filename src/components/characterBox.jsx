import React, { Component } from 'react';
/**
 * Basic Box with character within it
 * On Click add character to word
 */
class CharBox extends Component {
    handleClick = (e) => {
        console.log(this.props);
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

export default CharBox;
