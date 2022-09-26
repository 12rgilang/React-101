import React from 'react';


// working with React.js state
class Item extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            clicks: 0,
            totalRemaining: 10,
        }
    }

    clickMe() {
        this.setState({
            clicks: this.state.clicks + 1,
            totalRemaining: this.state.totalRemaining -1
        })
    }

    render() {
        return(
            <div>
                <h5 onClick={() => this.clickMe()}>
                    Heloo iam Gilang Ramadhan i learning this courses via {this.props.courses}
                </h5>

                <span>{this.state.clicks} is the number of clicks , click remaining {this.state.totalRemaining}</span>
            </div>
        )
    }
}

export default Item;