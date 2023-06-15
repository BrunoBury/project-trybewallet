import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../redux/actions';

import '../styles/Login.css';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email } = this.state;
    const { dispatch, history } = this.props;
    dispatch(login(email));
    history.push('/carteira');
  };

  render() {
    const minPasswordLength = 6;
    const { email, password } = this.state;
    const isEmailValid = /\S+@\S+\.\S+/.test(email);
    const isPasswordValid = password.length >= minPasswordLength;
    const isFormValid = isEmailValid && isPasswordValid;

    return (
      <div className="container">
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={ this.handleSubmit }>
            <label htmlFor="email-input">E-mail:</label>
            <input
              type="email"
              id="email-input"
              data-testid="email-input"
              name="email"
              value={ email }
              onChange={ this.handleInputChange }
              required
            />
            <br />
            <label htmlFor="password-input">Senha:</label>
            <input
              type="password"
              id="password-input"
              data-testid="password-input"
              name="password"
              value={ password }
              onChange={ this.handleInputChange }
              required
            />
            <br />
            <button type="submit" disabled={ !isFormValid }>
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Login);
