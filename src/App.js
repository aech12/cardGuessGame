import React, { Component } from 'react';
// import './components/All.css';
import Board from './components/Board';

class App extends Component {
  render() {
    return (
      <div className='game'>
        <Board/>
      </div>
    )
  }
}

export default App;