import React, { Component } from 'react';
import WordBox from './wordBox';

class WordList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            car: '',
        }
    }
    render() { 
        // const listItems = this.props.wordChars.map((d) => <
        // WordBox 
        // char = {d} 
        // />);
        return ( 
        <div className='flexRow'>
            {this.props.wordBoxes}
        </div>
         );
    }
}
 
export default WordList;