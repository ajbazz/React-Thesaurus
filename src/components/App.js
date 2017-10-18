import React, { Component } from 'react';
import Main from './Main'
// import logo from '../logo.svg';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App container content">
        <div className="header">
          <div className="page-header text-center">
            <h3>React Thesaurus</h3>
            <h5>Enter a word to see its definitions and synonyms.</h5>
          </div>
        </div>

        <Main />

        <div className="footer">
          <div className="container">
            <p><span className="text-left">
            </span>2017 Aaron Bazzone - Built on React v16.0.0</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
