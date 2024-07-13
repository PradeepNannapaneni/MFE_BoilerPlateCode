import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Now you are Navigated to React App.
        </p>
        <a
          className="App-link"
          href="http://localhost:9000/home"
        >
          click here to go to home page
        </a>
      </header>
    </div>
  );
}

export default App;
