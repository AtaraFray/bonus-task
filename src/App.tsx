import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Hello !!!!</h1>
      <h2>I'm happy to show you my project</h2>
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Atara Fray 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
