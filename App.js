import logo from './logo.svg';
import './App.css';
import Item from './MyItem';

// working with React.js click events
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Item courses="Udemy"/>
        <Item courses="Purwadhika"/>
        <Item courses="Ruang Guru"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 101
        </a>
      </header>
    </div>
  );
}

export default App;
