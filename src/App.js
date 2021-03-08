import React, { Component } from 'react';

import './App.scss';
import Board from './components/Board';
import Autorization from './components/Autorization';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: null
    };

    this.updateToken = this.updateToken.bind(this);
  }

  updateToken(token) {
    this.setState((state) => {
      const currentState = {...state};
      currentState.token = token;
      return currentState;
    });
  }

  componentDidMount() {
    const token = localStorage.getItem('authToken');

    if (!token) {
      return;
    }

    this.setState((state) => {
      const currentState = {...state};
      currentState.token = token;
      return currentState;
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.token
            ? <Board token={this.state.token} />
            : <Autorization onLogin={this.updateToken} />
          }
        </header>
      </div>
    );
  }
}

export default App;
