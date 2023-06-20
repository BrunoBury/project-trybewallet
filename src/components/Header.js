import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/Header.css';

class Header extends Component {
  render() {
    const { user, expenses } = this.props;
    const { email } = user;
    const expense = expenses.map((expen) => (
      (expen.value) * (expen.exchangeRates[expen.currency].ask)
    ));
    const result = expense.length > 0 ? expense.reduce((acc, curr) => acc + curr) : 0;
    return (
      <div className="header-container">
        <h1 className="title-wallet">TrybeWallet</h1>
        <div className="header-info">
          <div className="total-field" data-testid="total-field">
            {result.toFixed(2)}
          </div>
          <div
            className="header-currency-field"
            data-testid="header-currency-field"
          >
            BRL
          </div>
        </div>
        <div className="email-field" data-testid="email-field">{email}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

export default connect(mapStateToProps)(Header);
