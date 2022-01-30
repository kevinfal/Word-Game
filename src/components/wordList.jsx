import React, { Component } from 'react';

class WordList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            car: '',
        }
    }
    render() { 
        return ( 
        <div className='flexRow'>
            {this.props.wordBoxes}
        </div>
         );
    }
}
 
export default WordList;