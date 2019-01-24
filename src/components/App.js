import React, { Component } from 'react';
import Main from './Main'
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App container content">
        <div id="linkhome"><a href="http://aaronbazzone.com" title="aaronbazzone.com" target="_top">Home</a></div>

        <div className="header">
          <div className="page-header text-center">
            <h4>React Thesaurus</h4>
          </div>
        </div>

        <Main />

        <div id="github"><a href="https://github.com/ajbazz/React-Thesaurus" title="Source code on GitHub" target="_top">Source code on GitHub</a></div>
        <div id="thatsme">Aaron Bazzone - 2019</div>

      </div>
    );
  }
}

export default App;
