import React, { Component } from 'react';
import CharBox from './characterBox';
/**
 * Contains all of CharBoxes that are used to construct
 * words in the game
 */
class CharList extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props.click);
    }
    
    render() { 
        const data = ["a","b","c"];
        const listItems = data.map((d) => <CharBox char = {d} onClick = {this.props.click}/>);
        //console.log(listItems);
        return (
        <div className = "flexRow">
            {listItems}
        </div>
        );
    }
}
 
export default CharList;