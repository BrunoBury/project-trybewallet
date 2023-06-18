import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { thunkFetchCurrencies, fetchAddExpenses } from '../redux/actions';
import '../styles/WalletForm.css';

class WalletForm extends Component {
  state = {
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { value, description, method, currency, tag, id } = this.state;
    const newstate = {
      id,
      value,
      description,
      currency,
      method,
      tag,
    };
    const { fetchAddExpense } = this.props;
    fetchAddExpense(newstate);
    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    }));
  };

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;

    return (
      <form className="wallet-form-container">
        <div className="form-field">
          <label>
            Valor da Despesa:
            <input
              type="number"
              name="value"
              value={ value }
              onChange={ this.handleInputChange }
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
              name="description"
              value={ description }
              onChange={ this.handleInputChange }
              data-testid="description-input"
              className="expense-description-field"
            />
          </label>
        </div>

        <div className="form-field">
          <label>
            Moeda:
            <select
              name="currency"
              value={ currency }
              onChange={ this.handleInputChange }
              data-testid="currency-input"
              className="currency-field"
            >
              {currencies.map((curr) => (
                <option key={ curr } value={ curr }>{curr}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="form-field">
          <label>
            Método de Pagamento:
            <select
              name="method"
              value={ method }
              onChange={ this.handleInputChange }
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
              name="tag"
              value={ tag }
              onChange={ this.handleInputChange }
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

        <button
          type="button"
          onClick={ this.handleSubmit }
          className="submit-button"
        >
          Adicionar Despesa

        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAddExpense: (state) => dispatch(fetchAddExpenses(state)),
  fetchCurrencies: () => dispatch(thunkFetchCurrencies()),
});

WalletForm.propTypes = {
  fetchCurrencies: PropTypes.func.isRequired,
  fetchAddExpense: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,

};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
