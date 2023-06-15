import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/Header.css';

class Header extends Component {
  render() {
    const { user } = this.props;
    const { email } = user;
    return (
      <div className="header-container">
        <div className="total-field" data-testid="total-field">0</div>
        <div
          className="header-currency-field"
          data-testid="header-currency-field"
        >
          BRL
        </div>
        <div className="email-field" data-testid="email-field">{email}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps)(Header);
