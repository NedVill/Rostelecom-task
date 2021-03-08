import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BoardSender.scss';

import utils from '../../utils';

export default class BoardSender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      text: '',
    };

    this.message = {};

    this.dispatchMessage = this.dispatchMessage.bind(this);
    this.setText = this.setText.bind(this);
  }

  setText(value) {
    this.setState((state) => {
      const currentState = {...state};
      currentState.text = value;
      return currentState;
    })
  }

  dispatchMessage() {
    const text = this.state.text.trim();

    if (!text) {
      return;
    }

    const data = {
      id: this.state.user.id,
      date: new Date(),
      user_id: this.state.user.id,
      text,
    }

    this.message = {...data};
    utils.dispatcher(this.message);
    this.setText('');
  }

  keyEvent({ keyCode }) {
    if (keyCode === 13) {
      this.dispatchMessage();
    }
  }

  render() {
    return (
      <div className="board-sender">
        <input
          onChange={(e) => this.setText(e.target.value)}
          onKeyDown={(e) => this.keyEvent(e)}
          value={this.state.text}
          className="board-sender__input"
          placeholder="Enter a message..."
        />
        <button
          onClick={() => this.dispatchMessage()}
          className="board-sender__btn"
        />
      </div>
    )
  };
}

BoardSender.propTypes = {
  user: PropTypes.object,
};
