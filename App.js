// import logo from './logo.svg';
import './App.css';
// import Item from './MyItem';

// for importing package from react
import React from 'react';


// pseudo coding lesson
class StarWars extends React.Component {
  render() {
    return (
      <div>
        <h1>Name</h1>
        <p>Height cm</p>
        <p>Homeworld: URL</p>
        <ul>
          <li>Films in here</li>
        </ul>
        <button type="button" className="btn">Randomize Character</button>
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
