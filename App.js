// import logo from './logo.svg';
import './App.css';
// import Item from './MyItem';

// for importing package from react
import React from 'react';

class StarWars extends React.Component {
  render() {
    return (
      <h1>This is StarWars Randomize Character Project</h1>
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
