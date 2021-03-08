import React, { Component } from 'react';
import './Autorization.scss';

export default class Autorization extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      pass: '',
      isError: false,
    };

    this.setInput = this.setInput.bind(this);
  }

  setInput(element) {
    const { name, value } = element;

    this.setState((state) => {
      const currentState = {...state};
      currentState[name] = value.trim();
      return currentState;
    });
  }

  dispatchData(event) {
    event.preventDefault();

    const login = 'test';
    const pass = 'test';
    const token = '12345';
    let isError = false;

    if (this.state.login !== login) {
      isError = true;
    }

    if (this.state.pass !== pass) {
      isError = true;
    }

    if (!isError) {
      localStorage.setItem('authToken', token);
      this.props.onLogin(token);
      return;
    }

    this.setState((state) => {
      const currentState = {...state};
      currentState.isError = true;
      return currentState;
    });
  }

  render() {
    return (
      <div className="login">
        <div className="login-title">Enter in chat room</div>
        <form className="login-form">
          <input
            onChange={(e) => this.setInput(e.target)}
            value={this.state.login}
            name="login"
            className="login-form__input"
            placeholder="Your login"
          />
          <input
            onChange={(e) => this.setInput(e.target)}
            value={this.state.pass}
            name="pass"
            className="login-form__input login-form__input--last"
            placeholder="Your pass"
          />
          {this.state.isError
          ? <div className="login-form__error">Wrong login or password</div>
          : ''}
          <button onClick={(e) => this.dispatchData(e)} className="login-form__btn">Sign in</button>
        </form>
      </div>
    )
  };
}
