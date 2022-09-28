// import logo from './logo.svg';
import './App.css';
// import Item from './MyItem';

// for importing package from react
import React from 'react';


// Storing State on computer
class StarWars extends React.Component {
  constructor() {
    super()
    this.state = {
      name: null,
      height: null,
      homeworld: null,
      films: [],
    }
  }

  getNewCharacter() {
    console.log("Get new character from a button")
    this.setState({
      name: null,
      height: null,
      homeworld: null,
      films: ['item 1', ['item 2']],
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <p>{this.state.height} cm</p>
        <p>Homeworld: {this.state.homeworld}</p>
        <ul>
          <li>{this.state.films}</li>
        </ul>
        <button 
        type="button" 
        onClick={() => this.getNewCharacter()} 
        className="btn"
        >
          Randomize Character
        </button>
      </div>
    )
  }
}

// working with React.js Randomize Character Project
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars />
      </header>
    </div>
  );
}

export default App;
