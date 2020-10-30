import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./HelloWorld";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld></HelloWorld>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <p>React is pretty flexible but it has a single strict rule:</p>
        <h2>
          All React components must act like pure functions with respect to
          their props.
        </h2>
      </div>
    </div>
  );
}

export default App;
