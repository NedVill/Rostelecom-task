import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Board.scss';

import BoardHeader from '../BoardHeader';
import BoardWindow from '../BoardWindow';
import BoardSender from '../BoardSender';
import { WebsocketMockAdapter } from '../../core/emmiter';
import utils from '../../utils';

export default class Board extends Component {
  constructor(props) {
    super(props);

    this.mocks = new WebsocketMockAdapter(utils.dispatcher, 1000);
    this.state = {
      users: this.mocks.getUsers(),
      token: this.props.token,
      messages: [],
    };
  }

  messageEventListener() {
    document.addEventListener('message', ({ detail }) => {
      this.setState((state) => {
        const currentState = {...state};
        currentState.messages.push(detail.message);
        return currentState;
      })
    })
  }

  componentDidMount() {
    this.mocks.init();
    this.messageEventListener();
  }

  render() {
    return (
      <div className="board">
        <BoardHeader users={this.state.users} />
        <BoardWindow
          token={this.state.token}
          users={this.state.users}
          messages={this.state.messages}
        />
        <BoardSender user={this.state.users[this.state.token]} />
      </div>
    );
  }
}

Board.propTypes = {
  token: PropTypes.string,
};
