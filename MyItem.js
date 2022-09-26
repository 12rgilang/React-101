import React from 'react';


// working with React.js click events
class Item extends React.Component{

    clickMe() {
        console.log("I was clicked")
    }

    render() {
        return(
            // its mean (=> to executed) "()events" 
            <h5 onClick={() => this.clickMe()}>Heloo iam Gilang Ramadhan i learning this courses via {this.props.courses}</h5>
        )
    }
}

export default Item;