import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { thunkFetchCurrencies } from '../redux/actions';
import '../styles/WalletForm.css';

class WalletForm extends Component {
  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  render() {
    const { currencies } = this.props;

    return (
      <form className="wallet-form-container">
        <div className="form-field">
          <label>
            Valor da Despesa:
            <input
              type="number"
              data-testid="value-input"
              className="expense-value-field"
            />
          </label>
        </div>

        <div className="form-field">
          <label>
            Descrição da Despesa:
            <input
              type="text"
              data-testid="description-input"
              className="expense-description-field"
            />
          </label>
        </div>

        <div className="form-field">
          <label>
            Moeda:
            <select
              data-testid="currency-input"
              className="currency-field"
            >
              {currencies.map((currency) => (
                <option key={ currency } value={ currency }>{currency}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="form-field">
          <label>
            Método de Pagamento:
            <select
              data-testid="method-input"
              className="payment-method-field"
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
        </div>

        <div className="form-field">
          <label>
            Categoria  da Despesa:
            <select
              data-testid="tag-input"
              className="expense-tag-field"
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </div>

        <button type="submit" className="submit-button">Adicionar Despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies() {
    dispatch(thunkFetchCurrencies());
  },
});

WalletForm.propTypes = {
  fetchCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
