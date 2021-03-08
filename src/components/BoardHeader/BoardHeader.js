import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BoardHeader.scss';

import BoardInfo from '../BoardInfo';

export default class BoardHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: this.props.users,
      isActive: false,
    };

    this.countMember = Object.keys(this.props.users).length;
    this.openInfo = this.openInfo.bind(this);
  }

  openInfo() {
    this.setState((state) => {
      const currentState = {...state};
      currentState.isActive = !currentState.isActive;
      return currentState;
    })
  }

  render() {
    return (
      <>
        <div className="board-header">
          <div className="flex align_center">
            <div className="board-header__bar">
              <b>Chat room</b>
              <div>{this.countMember} {this.countMember > 1 ? 'members' : 'member'}</div>
            </div>
            <button
              onClick={() => this.openInfo()}
              className="board-header__btn"
            >
              <div className="board-header__btn--dot"></div>
            </button>
          </div>
        </div>
        <BoardInfo
          active={this.state.isActive}
          users={this.state.users}
          onClose={this.openInfo}
        />
      </>
    );
  }
}

BoardHeader.propTypes = {
  users: PropTypes.object,
};
