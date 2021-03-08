import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BoardWindow.scss';

import Message from '../Message';
import MessageSelf from '../MessageSelf';

export default class BoardWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: this.props.messages,
    };

    this.wrapperRef = React.createRef();
    this.lastMessageUserId = '';
    this.renderMessage = this.renderMessage.bind(this);
    this.scrollBottom = this.scrollBottom.bind(this);
  }

  renderMessage() {
    let messages = [];
  
    this.state.messages.forEach((message, idx) => {
      const userData = this.props.users[message.user_id];
      const currentMessage = {...userData, ...message};
      const beforeMessage = this.state.messages[idx - 1];
      const afterMessage = this.state.messages[idx + 1];

      currentMessage.idx = 0;

      if (!!beforeMessage && beforeMessage.user_id === currentMessage.user_id) {
        currentMessage.idx = messages[idx - 1].idx + 1;
      }

      if (!!afterMessage && afterMessage.user_id === currentMessage.user_id) {
        currentMessage.type = 'current';
      } else {
        currentMessage.type = 'finish';
      }

      messages.push(currentMessage);
    });

    return messages.map((message, idx) => {
      let chunk = (
        <Message
          onLoad={this.scrollBottom}
          key={idx}
          message={message}
        />
      )

      if (message.user_id === this.props.token) {
        chunk = (
          <MessageSelf
            onLoad={this.scrollBottom}
            key={idx}
            message={message}
          />
        );
      }

      return chunk;
    });
  }

  scrollBottom() {
    const wrapper = this.wrapperRef.current;
    wrapper.scrollTo(0, wrapper.scrollHeight);
  }

  render() {
    return (
      <div className="board-window" ref={this.wrapperRef}>
        <div className="flex flex_column align_start">
          {this.renderMessage()}
        </div>
      </div>
    );
  }
}

BoardWindow.propTypes = {
  token: PropTypes.string,
  users: PropTypes.object,
  messages: PropTypes.array,
};
